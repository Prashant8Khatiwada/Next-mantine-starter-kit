'use client';

import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { theme } from '@/theme/theme';
import { queryClient } from '@/api/queryClient';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme} defaultColorScheme="light">
                {children}
                <Toaster position="top-right" />
            </MantineProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
