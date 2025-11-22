'use client';

import { Stack, Text, Paper, Group, Avatar, TextInput, Button, Grid, Divider } from '@mantine/core';
import { IconUser, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

export function ProfilePage() {
    return (
        <Stack gap="lg">
            <Text size="xl" fw={700}>
                Profile
            </Text>

            <Paper p="xl" withBorder>
                <Stack gap="xl">
                    <Group>
                        <Avatar size={80} radius="md" color="violet">
                            JD
                        </Avatar>
                        <Stack gap="xs">
                            <Text size="lg" fw={600}>
                                John Doe
                            </Text>
                            <Text size="sm" c="dimmed">
                                john@example.com
                            </Text>
                            <Button variant="light" size="xs">
                                Change Avatar
                            </Button>
                        </Stack>
                    </Group>

                    <Divider />

                    <Stack gap="md">
                        <Text size="md" fw={600}>
                            Personal Information
                        </Text>
                        <Grid>
                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                <TextInput
                                    label="Full Name"
                                    placeholder="John Doe"
                                    defaultValue="John Doe"
                                    leftSection={<IconUser size={18} />}
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                <TextInput
                                    label="Email"
                                    placeholder="john@example.com"
                                    defaultValue="john@example.com"
                                    leftSection={<IconMail size={18} />}
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                <TextInput
                                    label="Phone"
                                    placeholder="+1 234 567 8900"
                                    leftSection={<IconPhone size={18} />}
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, sm: 6 }}>
                                <TextInput
                                    label="Location"
                                    placeholder="New York, USA"
                                    leftSection={<IconMapPin size={18} />}
                                />
                            </Grid.Col>
                        </Grid>
                    </Stack>

                    <Group justify="flex-end">
                        <Button variant="default">Cancel</Button>
                        <Button variant="filled">Save Changes</Button>
                    </Group>
                </Stack>
            </Paper>
        </Stack>
    );
}
