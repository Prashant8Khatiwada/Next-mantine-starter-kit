'use client';

import { Stack, Text, Paper, Switch, Select, Divider, Button, Group } from '@mantine/core';

export function SettingsPage() {
    return (
        <Stack gap="lg">
            <Text size="xl" fw={700}>
                Settings
            </Text>

            <Paper p="xl" withBorder>
                <Stack gap="xl">
                    <Stack gap="md">
                        <Text size="md" fw={600}>
                            Appearance
                        </Text>
                        <Switch
                            label="Enable dark mode"
                            description="Toggle between light and dark theme"
                        />
                        <Switch
                            label="Compact mode"
                            description="Reduce spacing for a more compact layout"
                        />
                    </Stack>

                    <Divider />

                    <Stack gap="md">
                        <Text size="md" fw={600}>
                            Notifications
                        </Text>
                        <Switch
                            label="Email notifications"
                            description="Receive email updates about your account"
                            defaultChecked
                        />
                        <Switch
                            label="Push notifications"
                            description="Receive push notifications in your browser"
                        />
                        <Switch
                            label="Marketing emails"
                            description="Receive emails about new features and updates"
                        />
                    </Stack>

                    <Divider />

                    <Stack gap="md">
                        <Text size="md" fw={600}>
                            Preferences
                        </Text>
                        <Select
                            label="Language"
                            placeholder="Select language"
                            defaultValue="en"
                            data={[
                                { value: 'en', label: 'English' },
                                { value: 'es', label: 'Spanish' },
                                { value: 'fr', label: 'French' },
                                { value: 'de', label: 'German' },
                            ]}
                        />
                        <Select
                            label="Timezone"
                            placeholder="Select timezone"
                            defaultValue="utc"
                            data={[
                                { value: 'utc', label: 'UTC' },
                                { value: 'est', label: 'Eastern Time' },
                                { value: 'pst', label: 'Pacific Time' },
                                { value: 'cst', label: 'Central Time' },
                            ]}
                        />
                    </Stack>

                    <Group justify="flex-end">
                        <Button variant="default">Reset</Button>
                        <Button variant="filled">Save Settings</Button>
                    </Group>
                </Stack>
            </Paper>
        </Stack>
    );
}
