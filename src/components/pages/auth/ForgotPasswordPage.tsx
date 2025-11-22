'use client';

import { Stack, Text, TextInput, Button, Anchor, Alert } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { IconArrowLeft, IconInfoCircle } from '@tabler/icons-react';

export function ForgotPasswordPage() {
    return (
        <Stack gap="lg">
            <Stack gap="xs">
                <Text size="xl" fw={700} ta="center">
                    Forgot Password?
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                    No worries! Enter your email and we'll send you reset instructions
                </Text>
            </Stack>

            <Alert icon={<IconInfoCircle size={18} />} title="Password Reset" color="blue" variant="light">
                We'll send a password reset link to your email address
            </Alert>

            <Stack gap="md">
                <TextInput
                    label="Email"
                    placeholder="hello@example.com"
                    required
                    type="email"
                />

                <Button component={Link} to="/auth/reset-password" fullWidth variant="filled" size="md">
                    Send Reset Link
                </Button>

                <Button
                    component={Link}
                    to="/auth/login"
                    variant="subtle"
                    leftSection={<IconArrowLeft size={18} />}
                    fullWidth
                >
                    Back to Login
                </Button>
            </Stack>
        </Stack>
    );
}
