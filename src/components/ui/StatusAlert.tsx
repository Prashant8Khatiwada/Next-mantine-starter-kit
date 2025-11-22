'use client';

import { Alert, AlertProps } from '@mantine/core';
import { IconInfoCircle, IconAlertCircle, IconCircleCheck, IconAlertTriangle } from '@tabler/icons-react';

interface StatusAlertProps extends Omit<AlertProps, 'icon' | 'color'> {
    variant: 'info' | 'warning' | 'error' | 'success';
    title?: string;
    children: React.ReactNode;
}

const variantConfig = {
    info: {
        color: 'blue',
        icon: IconInfoCircle,
    },
    warning: {
        color: 'yellow',
        icon: IconAlertTriangle,
    },
    error: {
        color: 'red',
        icon: IconAlertCircle,
    },
    success: {
        color: 'green',
        icon: IconCircleCheck,
    },
};

export function StatusAlert({ variant, title, children, ...props }: StatusAlertProps) {
    const config = variantConfig[variant];
    const Icon = config.icon;

    return (
        <Alert
            {...props}
            color={config.color}
            title={title}
            icon={<Icon size={20} />}
        >
            {children}
        </Alert>
    );
}
