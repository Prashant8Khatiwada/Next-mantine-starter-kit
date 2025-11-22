import { createRouter, createRootRouteWithContext, createRoute, Outlet, Link } from '@tanstack/react-router';
import { HomePage } from '@/components/pages/HomePage';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { Container, Text, Button, Stack, TextInput, PasswordInput, Paper } from '@mantine/core';
import { QueryClient, queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { api } from '@/api/api-client';
import { Post } from '@/services/posts';

interface RouterContext {
    queryClient: QueryClient
}

// Root Route
const rootRoute = createRootRouteWithContext<RouterContext>()({
    component: () => <Outlet />,
});

// Home Route
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
});

// Dashboard Route
const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'dashboard',
    component: DashboardLayout,
});

const postsQueryOptions = queryOptions({
    queryKey: ['posts'],
    queryFn: () => api.get<Post[]>('/posts'),
});

function DashboardIndex() {
    const postsQuery = useSuspenseQuery(postsQueryOptions);
    const posts = postsQuery.data;

    return (
        <Container>
            <Text size="xl" fw={700} mb="md">Dashboard Overview</Text>
            <Stack>
                {posts.map(post => (
                    <Paper key={post.id} p="md" withBorder shadow="sm">
                        <Text fw={600} tt="capitalize">{post.title}</Text>
                        <Text size="sm" c="dimmed">{post.body}</Text>
                    </Paper>
                ))}
            </Stack>
        </Container>
    );
}

const dashboardIndexRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: '/',
    loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(postsQueryOptions),
    component: DashboardIndex,
});

dashboardRoute.addChildren([dashboardIndexRoute]);

// Auth Route
const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'auth',
    component: AuthLayout,
});

const loginRoute = createRoute({
    getParentRoute: () => authRoute,
    path: 'login',
    component: () => (
        <Stack>
            <Text size="xl" fw={700} ta="center">Welcome Back</Text>
            <TextInput label="Email" placeholder="hello@example.com" />
            <PasswordInput label="Password" placeholder="Your password" />
            <Button component={Link} to="/dashboard" fullWidth mt="md" variant="filled">Sign In</Button>
        </Stack>
    ),
});

authRoute.addChildren([loginRoute]);

const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute, authRoute]);

export const router = createRouter({
    routeTree,
    context: {
        queryClient: undefined! as QueryClient,
    },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
