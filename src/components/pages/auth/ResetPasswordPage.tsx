'use client';

import { Stack, Text, PasswordInput, Button, Alert } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { IconCheck } from '@tabler/icons-react';

export function ResetPasswordPage() {
    return (
        <Stack gap="lg">
            <Stack gap="xs">
                <Text size="xl" fw={700} ta="center">
                    Reset Password
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                    Enter your new password below
                </Text>
            </Stack>

            <Alert icon={<IconCheck size={18} />} title="Almost there!" color="green" variant="light">
                Choose a strong password to secure your account
            </Alert>

            <Stack gap="md">
                <PasswordInput
                    label="New Password"
                    placeholder="Enter new password"
                    required
                />
                <PasswordInput
                    label="Confirm New Password"
                    placeholder="Confirm new password"
                    required
                />

                <Button component={Link} to="/auth/login" fullWidth variant="filled" size="md">
                    Reset Password
                </Button>

                <Button component={Link} to="/auth/login" variant="subtle" fullWidth>
                    Back to Login
                </Button>
            </Stack>
        </Stack>
    );
}
