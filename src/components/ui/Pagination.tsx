'use client';

import { Group, Pagination as MantinePagination, Select, Text } from '@mantine/core';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    pageSizeOptions?: number[];
}

export function Pagination({
    currentPage,
    totalPages,
    pageSize,
    totalItems,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions = [10, 20, 50, 100],
}: PaginationProps) {
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    return (
        <Group justify="space-between" wrap="wrap" gap="md">
            <Group gap="sm">
                <Text size="sm" c="dimmed">
                    Showing {startItem} to {endItem} of {totalItems} items
                </Text>
                {onPageSizeChange && (
                    <Group gap="xs">
                        <Text size="sm" c="dimmed">
                            Items per page:
                        </Text>
                        <Select
                            size="xs"
                            value={String(pageSize)}
                            onChange={(value) => value && onPageSizeChange(Number(value))}
                            data={pageSizeOptions.map((size) => ({
                                value: String(size),
                                label: String(size),
                            }))}
                            w={80}
                        />
                    </Group>
                )}
            </Group>
            <MantinePagination
                value={currentPage}
                onChange={onPageChange}
                total={totalPages}
                size="sm"
                withEdges
            />
        </Group>
    );
}
