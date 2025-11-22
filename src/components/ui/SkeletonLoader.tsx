'use client';

import { Skeleton, Stack, StackProps } from '@mantine/core';

interface SkeletonLoaderProps extends StackProps {
    variant?: 'text' | 'card' | 'table' | 'form';
    count?: number;
}

export function SkeletonLoader({ variant = 'text', count = 3, ...props }: SkeletonLoaderProps) {
    if (variant === 'text') {
        return (
            <Stack gap="sm" {...props}>
                {Array.from({ length: count }).map((_, i) => (
                    <Skeleton key={i} height={20} radius="md" />
                ))}
            </Stack>
        );
    }

    if (variant === 'card') {
        return (
            <Stack gap="md" {...props}>
                {Array.from({ length: count }).map((_, i) => (
                    <Stack key={i} gap="sm">
                        <Skeleton height={200} radius="md" />
                        <Skeleton height={20} radius="md" width="70%" />
                        <Skeleton height={15} radius="md" width="90%" />
                    </Stack>
                ))}
            </Stack>
        );
    }

    if (variant === 'table') {
        return (
            <Stack gap="xs" {...props}>
                <Skeleton height={40} radius="md" />
                {Array.from({ length: count }).map((_, i) => (
                    <Skeleton key={i} height={60} radius="md" />
                ))}
            </Stack>
        );
    }

    if (variant === 'form') {
        return (
            <Stack gap="md" {...props}>
                {Array.from({ length: count }).map((_, i) => (
                    <Stack key={i} gap="xs">
                        <Skeleton height={12} width={100} radius="md" />
                        <Skeleton height={40} radius="md" />
                    </Stack>
                ))}
            </Stack>
        );
    }

    return null;
}
