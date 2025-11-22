'use client';

import { Stack, Text, TextInput, PasswordInput, Button, Checkbox, Anchor, Divider, Group } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react';

export function RegisterPage() {
    return (
        <Stack gap="lg">
            <Stack gap="xs">
                <Text size="xl" fw={700} ta="center">
                    Create Account
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                    Join us today! Fill in your details to get started
                </Text>
            </Stack>

            <Stack gap="md">
                <TextInput
                    label="Full Name"
                    placeholder="John Doe"
                    required
                />
                <TextInput
                    label="Email"
                    placeholder="hello@example.com"
                    required
                    type="email"
                />
                <PasswordInput
                    label="Password"
                    placeholder="Create a strong password"
                    required
                />
                <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    required
                />

                <Checkbox
                    label={
                        <>
                            I agree to the{' '}
                            <Anchor href="#" size="sm">
                                Terms and Conditions
                            </Anchor>
                        </>
                    }
                    size="sm"
                />

                <Button component={Link} to="/dashboard" fullWidth variant="filled" size="md">
                    Create Account
                </Button>
            </Stack>

            <Divider label="Or sign up with" labelPosition="center" />

            <Group grow>
                <Button variant="default" leftSection={<IconBrandGoogle size={18} />}>
                    Google
                </Button>
                <Button variant="default" leftSection={<IconBrandGithub size={18} />}>
                    GitHub
                </Button>
            </Group>

            <Text size="sm" ta="center">
                Already have an account?{' '}
                <Anchor component={Link} to="/auth/login" fw={600}>
                    Sign in
                </Anchor>
            </Text>
        </Stack>
    );
}
