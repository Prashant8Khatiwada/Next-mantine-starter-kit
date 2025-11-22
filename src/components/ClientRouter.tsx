'use client';

import { RouterProvider } from '@tanstack/react-router';
import { router } from '@/routes/router';
import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

export function ClientRouter() {
    const queryClient = useQueryClient();

    // Ensure router has the context before rendering
    useMemo(() => {
        if (queryClient) {
            router.update({
                context: { queryClient },
            });
        }
    }, [queryClient]);

    if (!queryClient) return null;

    return <RouterProvider router={router} />;
}
