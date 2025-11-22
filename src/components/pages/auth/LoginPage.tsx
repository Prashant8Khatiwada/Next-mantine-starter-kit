'use client';

import { Stack, Text, TextInput, PasswordInput, Button, Checkbox, Anchor, Divider, Group } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react';

export function LoginPage() {
    return (
        <Stack gap="lg">
            <Stack gap="xs">
                <Text size="xl" fw={700} ta="center">
                    Sign In
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                    Welcome back! Please enter your credentials
                </Text>
            </Stack>

            <Stack gap="md">
                <TextInput
                    label="Email"
                    placeholder="hello@example.com"
                    required
                    type="email"
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                />

                <Group justify="space-between">
                    <Checkbox label="Remember me" size="sm" />
                    <Anchor component={Link} to="/auth/forgot-password" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>

                <Button component={Link} to="/dashboard" fullWidth variant="filled" size="md">
                    Sign In
                </Button>
            </Stack>

            <Divider label="Or continue with" labelPosition="center" />

            <Group grow>
                <Button variant="default" leftSection={<IconBrandGoogle size={18} />}>
                    Google
                </Button>
                <Button variant="default" leftSection={<IconBrandGithub size={18} />}>
                    GitHub
                </Button>
            </Group>

            <Text size="sm" ta="center">
                Don't have an account?{' '}
                <Anchor component={Link} to="/auth/register" fw={600}>
                    Sign up
                </Anchor>
            </Text>
        </Stack>
    );
}
