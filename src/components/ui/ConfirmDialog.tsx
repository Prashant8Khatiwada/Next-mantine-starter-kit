'use client';

import { Modal, ModalProps, Button, Group, Text, Stack } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

interface ConfirmDialogProps extends Omit<ModalProps, 'children' | 'onClose'> {
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmColor?: string;
    onConfirm: () => void | Promise<void>;
    onCancel: () => void;
    loading?: boolean;
}

export function ConfirmDialog({
    title,
    message,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    confirmColor = 'red',
    onConfirm,
    onCancel,
    loading = false,
    ...modalProps
}: ConfirmDialogProps) {
    const handleConfirm = async () => {
        await onConfirm();
    };

    return (
        <Modal
            {...modalProps}
            onClose={onCancel}
            title={
                <Group gap="xs">
                    <IconAlertTriangle size={24} color="var(--mantine-color-red-6)" />
                    <Text fw={600}>{title}</Text>
                </Group>
            }
        >
            <Stack gap="lg">
                <Text size="sm" c="dimmed">
                    {message}
                </Text>
                <Group justify="flex-end" gap="sm">
                    <Button variant="subtle" onClick={onCancel} disabled={loading}>
                        {cancelLabel}
                    </Button>
                    <Button color={confirmColor} onClick={handleConfirm} loading={loading}>
                        {confirmLabel}
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
}
