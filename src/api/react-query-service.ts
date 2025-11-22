import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
    UseQueryOptions,
    UseMutationOptions,
    QueryKey,
} from "@tanstack/react-query"
import { api } from "./api-client"
import { publicApi } from "./api-client"
import { PaginatedResponse } from "@/types"
import { toFormData } from "@/utils/common"

type Id = string | number

type CreateOptions<TResponse, TVariables, TContext = unknown> = UseMutationOptions<TResponse, unknown, TVariables, TContext> & {
    type?: 'json' | 'multipart'
}

export function createReactQueryApiService<T>(endpoint: string, baseKey: QueryKey) {
    const getQueryKeyById = (id: Id) => [...baseKey, id];

    return {
        // GET ALL (paginated)
        useGetAll: <TResponse = { items: T[]; total: number }>(
            params?: Record<string, unknown>,
            options?: UseQueryOptions<TResponse>
        ) =>
            useQuery<TResponse>({
                queryKey: [...baseKey, { ...params }],
                queryFn: () => api.get<TResponse>(endpoint, params),
                ...options,
            }),

        // GET LIST
        useGet: <TResponse = T>(
            params?: Record<string, unknown>,
            options?: Omit<UseQueryOptions<TResponse>, 'queryKey' | 'queryFn'>
        ) =>
            useQuery<TResponse>({
                queryKey: [...baseKey, "all", { ...params }],
                queryFn: () => api.get<TResponse>(endpoint, params),
                ...options,
            }),

        // GET BY ID
        useGetById: <TResponse = T>(
            id: Id,
            options?: UseQueryOptions<TResponse>
        ) =>
            useQuery<TResponse>({
                queryKey: getQueryKeyById(id),
                queryFn: () => api.get<TResponse>(`${endpoint}/${id}`),
                enabled: !!id,
                ...options,
            }),

        // GET ALL INFINITE
        useInfiniteGetAll: <TResponse extends { items: unknown[]; total: number } = { items: T[]; total: number }>(
            params?: Record<string, unknown>
        ) =>
            useInfiniteQuery<TResponse>({
                queryKey: [...baseKey, "infinite", { ...params }],
                queryFn: ({ pageParam = 1 }) =>
                    api.get<TResponse>(endpoint, { ...params, page: pageParam }),
                getNextPageParam: (lastPage, allPages) =>
                    (lastPage.items?.length ?? 0) > 0 ? allPages.length + 1 : undefined,
                initialPageParam: 1,
            }),

        // CREATE
        useCreate: <TResponse = T, TVariables = Partial<T>>(
            options?: CreateOptions<TResponse, TVariables>
        ) => {
            const queryClient = useQueryClient();
            const { type = 'json', ...mutationOptions } = options || {};

            return useMutation<TResponse, unknown, TVariables>({
                mutationFn: (data: TVariables) => {
                    if (type === 'multipart') {
                        // Assume data is FormData or convert it
                        const formData = data instanceof FormData ? data : toFormData(data as Record<string, unknown>)

                        return api.postMultipart<TResponse>(endpoint, formData);
                    }
                    return api.post<TResponse, TVariables>(endpoint, data);
                },
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: baseKey });
                },
                ...mutationOptions,
            });
        },

        // UPDATE (PUT)
        useUpdate: <TResponse = T, TVariables = Partial<T>>(
            params?: Record<string, unknown>,
            options?: CreateOptions<TResponse, TVariables>
        ) => {
            const queryClient = useQueryClient();
            const { type = 'json', ...mutationOptions } = options || {};

            return useMutation<TResponse, unknown, TVariables>({
                mutationFn: (data: TVariables) => {
                    if (type === 'multipart') {
                        const formData = data instanceof FormData ? data : toFormData(data as Record<string, unknown>)

                        return api.putMultipart<TResponse>(endpoint, formData);
                    }
                    return api.put<TResponse, TVariables>(endpoint, data, { params });
                },
                onSettled: () => {
                    queryClient.invalidateQueries({ queryKey: [...baseKey, { ...params }] });
                },
                ...mutationOptions,
            });
        },

        // UPDATE BY ID (PUT)
        useUpdateById: <TResponse = T, TVariables extends { id: Id; data: Partial<T>; query?: unknown } = { id: Id; data: Partial<T>; query?: unknown }>(
            options?: CreateOptions<TResponse, TVariables, { previous: T | undefined }>
        ) => {
            const queryClient = useQueryClient();
            const { type = 'json', ...mutationOptions } = options || {};

            return useMutation<TResponse, unknown, TVariables, { previous: T | undefined }>({
                mutationFn: ({ id, data, query }) => {
                    if (type === 'multipart') {
                        const formData = data instanceof FormData ? data : toFormData(data as Record<string, unknown>)

                        return api.putMultipart<TResponse>(`${endpoint}/${id}`, formData);
                    }
                    return api.put<TResponse, Partial<T>>(`${endpoint}/${id}`, data, { params: query });
                },
                onMutate: async ({ id, data }) => {
                    await queryClient.cancelQueries({ queryKey: getQueryKeyById(id) });
                    const previous = queryClient.getQueryData<T>(getQueryKeyById(id));
                    if (previous) {
                        queryClient.setQueryData<T>(getQueryKeyById(id), { ...previous, ...data });
                    }
                    return { previous };
                },
                onError: (_err, vars, context) => {
                    if (context?.previous) {
                        queryClient.setQueryData<T>(getQueryKeyById(vars.id), context.previous);
                    }
                },
                onSettled: (_data, _err, vars) => {
                    queryClient.invalidateQueries({ queryKey: getQueryKeyById(vars.id) });
                    queryClient.invalidateQueries({ queryKey: baseKey });
                },
                ...mutationOptions,
            });
        },

        // PARTIAL UPDATE (PATCH)
        usePatch: <TResponse = T, TVariables = Partial<T>>(
            options?: CreateOptions<TResponse, TVariables>
        ) => {
            const queryClient = useQueryClient();
            const { type = 'json', ...mutationOptions } = options || {};

            return useMutation<TResponse, unknown, TVariables>({
                mutationFn: (data: TVariables) => {
                    if (type === 'multipart') {
                        const formData = data instanceof FormData ? data : toFormData(data as Record<string, unknown>)

                        return api.patchMultipart<TResponse>(endpoint, formData);
                    }
                    return api.patch<TResponse, TVariables>(endpoint, data);
                },
                onSettled: () => {
                    queryClient.invalidateQueries({ queryKey: baseKey });
                },
                ...mutationOptions,
            });
        },

        // PARTIAL UPDATE BY ID (PATCH)
        usePatchById: <TResponse = T, TVariables extends { id: Id; data: Partial<T>; query?: unknown } = { id: Id; data: Partial<T>; query?: unknown }>(
            options?: CreateOptions<TResponse, TVariables, { previous: T | undefined }>
        ) => {
            const queryClient = useQueryClient();
            const { type = 'json', ...mutationOptions } = options || {};

            return useMutation<TResponse, unknown, TVariables, { previous: T | undefined }>({
                mutationFn: ({ id, data, query }) => {
                    if (type === 'multipart') {
                        const formData = data instanceof FormData ? data : toFormData(data as Record<string, unknown>)

                        return api.patchMultipart<TResponse>(`${endpoint}/${id}`, formData);
                    }
                    return api.patch<TResponse, Partial<T>>(`${endpoint}/${id}`, data, { params: query });
                },
                onMutate: async ({ id, data }) => {
                    await queryClient.cancelQueries({ queryKey: getQueryKeyById(id) });
                    const previous = queryClient.getQueryData<T>(getQueryKeyById(id));
                    if (previous) {
                        queryClient.setQueryData<T>(getQueryKeyById(id), { ...previous, ...data });
                    }
                    return { previous };
                },
                onError: (_err, vars, context) => {
                    if (context?.previous) {
                        queryClient.setQueryData<T>(getQueryKeyById(vars.id), context.previous);
                    }
                },
                onSettled: (_data, _err, vars) => {
                    queryClient.invalidateQueries({ queryKey: getQueryKeyById(vars.id) });
                    queryClient.invalidateQueries({ queryKey: baseKey });
                },
                ...mutationOptions,
            });
        },

        // DELETE
        useDelete: <TResponse = void, TVariables extends { id: Id; query?: unknown } = { id: Id; query?: unknown }>(
            options?: UseMutationOptions<TResponse, unknown, TVariables>
        ) => {
            const queryClient = useQueryClient();
            return useMutation<TResponse, unknown, TVariables>({
                mutationFn: ({ id, query }) => api.delete<TResponse>(`${endpoint}/${id}`, { params: query }),
                onSuccess: (_data, variables) => {
                    queryClient.invalidateQueries({ queryKey: baseKey });
                    queryClient.invalidateQueries({ queryKey: getQueryKeyById(variables.id) });
                },
                ...options,
            });
        },

        // DELETE MANY
        useDeleteMany: <TResponse = void, TVariables extends { ids: Id[] } = { ids: Id[] }>(
            options?: UseMutationOptions<TResponse, unknown, TVariables>
        ) => {
            const queryClient = useQueryClient();
            return useMutation<TResponse, unknown, TVariables>({
                mutationFn: ({ ids }) => api.post<TResponse>(`${endpoint}/delete-many`, { ids }),
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: baseKey });
                },
                ...options,
            });
        },

        // PREFETCH
        prefetchById: async (queryClient: ReturnType<typeof useQueryClient>, id: Id) => {
            await queryClient.prefetchQuery({
                queryKey: getQueryKeyById(id),
                queryFn: () => api.get<T>(`${endpoint}/${id}`),
            });
        },

        getQueryKeyById,
    };
}

export function createPublicReactQueryApiService<T>(endpoint: string, baseKey: QueryKey) {
    const getQueryKey = (params?: Record<string, unknown>) => [...baseKey, "all", { ...params }];
    const getQueryKeyById = (id: Id) => [...baseKey, "byId", id];

    return {
        getQueryKey,
        getQueryKeyById,
        useLazyGet: (
            enabled: boolean,
            params?: Record<string, unknown>,
            options?: UseQueryOptions<T>
        ) =>
            useQuery({
                queryKey: getQueryKey(params),
                queryFn: () => api.get<T>(endpoint, params),
                enabled,
                ...options,
            }),

        useGet: (
            params?: Record<string, unknown>,
            options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
        ) =>
            useQuery({
                queryKey: getQueryKey(params),
                queryFn: () => api.get<T>(endpoint, params),
                ...options,
            }),

        useGetById: (id: Id, options?: UseQueryOptions<T>) =>
            useQuery({
                queryKey: getQueryKeyById(id),
                queryFn: () => publicApi.get<T>(`${endpoint}/${id}`),
                enabled: !!id,
                ...options,
            }),

        useGetByUrl: (
            fullUrl: string,
            params?: Record<string, unknown>,
            options?: UseQueryOptions<T>
        ) =>
            useQuery({
                queryKey: [...baseKey, 'url', fullUrl, params],
                queryFn: () => publicApi.get<T>(fullUrl, params),
                enabled: !!fullUrl,
                ...options,
            }),

        useInfiniteGetAll: (
            params?: Record<string, unknown>,
        ) =>
            useInfiniteQuery({
                queryKey: [...baseKey, "infinite", { ...params }],
                queryFn: ({ pageParam = 1 }) =>
                    api.get<PaginatedResponse<T>>(endpoint, { ...params, page: pageParam }),
                getNextPageParam: (lastPage) => {
                    const { currentPage, totalPages } = lastPage.pagination;
                    return currentPage < totalPages ? currentPage + 1 : undefined;
                },
                initialPageParam: 1,
            }),

    }
}
