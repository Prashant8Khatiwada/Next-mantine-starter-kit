import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import axios from "axios"
import { getLocalStorage, LocalStorageKeys } from "@/utils/storage"

// Base API configuration
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
    headers: {
        "Content-Type": "application/json",
    },
})

// Request interceptor for adding auth token, etc.
apiClient.interceptors.request.use(
    (config) => {
        const token = getLocalStorage(LocalStorageKeys.TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

// Response interceptor for handling errors
apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            // Handle unauthorized
        }
        return Promise.reject(error)
    },
)

export const api = {
    async get<T>(url: string, params?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.get(url, { params, ...config })
        return response.data
    },

    async post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.post(url, data, config)
        return response.data
    },

    async put<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.put(url, data, config)
        return response.data
    },

    async patch<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.patch(url, data, config)
        return response.data
    },

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.delete(url, config)
        return response.data
    },

    async postMultipart<T>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            ...config,
        })
        return response.data
    },

    async putMultipart<T>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.put(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            ...config,
        })
        return response.data
    },

    async patchMultipart<T>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await apiClient.patch(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            ...config,
        })
        return response.data
    },
}

export const publicApi = api; // For now, same as api
