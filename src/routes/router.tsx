import { createRouter, createRootRouteWithContext, createRoute, Outlet } from '@tanstack/react-router';
import { HomePage } from '@/components/pages/HomePage';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { LoginPage } from '@/components/pages/auth/LoginPage';
import { RegisterPage } from '@/components/pages/auth/RegisterPage';
import { ForgotPasswordPage } from '@/components/pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from '@/components/pages/auth/ResetPasswordPage';
import { ProfilePage } from '@/components/pages/dashboard/ProfilePage';
import { SettingsPage } from '@/components/pages/dashboard/SettingsPage';
import { Container, Text, Paper, Stack } from '@mantine/core';

// Root Route
const rootRoute = createRootRouteWithContext<{}>()({
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
    component: () => <DashboardLayout><Outlet /></DashboardLayout>,
});

// Mock data for dashboard - replace with real API calls in production
const mockPosts = [
    { id: 1, title: 'Welcome to your dashboard', body: 'This is a sample post. Replace this with real data from your API.' },
    { id: 2, title: 'Getting started', body: 'Explore the sidebar to navigate between different sections of your dashboard.' },
    { id: 3, title: 'Customize your experience', body: 'Visit the Settings page to configure your preferences and appearance.' },
    { id: 4, title: 'Your profile', body: 'Update your profile information in the Profile section.' },
];

function DashboardIndex() {
    // Using mock data instead of API call for starter kit
    const posts = mockPosts;

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
    component: DashboardIndex,
});

const dashboardProfileRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: 'profile',
    component: ProfilePage,
});

const dashboardSettingsRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: 'settings',
    component: SettingsPage,
});

dashboardRoute.addChildren([dashboardIndexRoute, dashboardProfileRoute, dashboardSettingsRoute]);

// Auth Route
const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'auth',
    component: () => <AuthLayout><Outlet /></AuthLayout>,
});

const loginRoute = createRoute({
    getParentRoute: () => authRoute,
    path: 'login',
    component: LoginPage,
});

const registerRoute = createRoute({
    getParentRoute: () => authRoute,
    path: 'register',
    component: RegisterPage,
});

const forgotPasswordRoute = createRoute({
    getParentRoute: () => authRoute,
    path: 'forgot-password',
    component: ForgotPasswordPage,
});

const resetPasswordRoute = createRoute({
    getParentRoute: () => authRoute,
    path: 'reset-password',
    component: ResetPasswordPage,
});

authRoute.addChildren([loginRoute, registerRoute, forgotPasswordRoute, resetPasswordRoute]);

const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute, authRoute]);

export const router = createRouter({
    routeTree,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
