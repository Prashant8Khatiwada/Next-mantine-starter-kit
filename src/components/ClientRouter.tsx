'use client';

import { RouterProvider } from '@tanstack/react-router';
import { router } from '@/routes/router';

export function ClientRouter() {
    return <RouterProvider router={router} />;
}
