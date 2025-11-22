'use client';

import { Container, AppShell, Group, Burger, Text, NavLink, Avatar, Menu, UnstyledButton, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconHome,
    IconUser,
    IconSettings,
    IconLogout,
    IconChevronDown,
    IconDashboard,
    IconChartBar,
    IconFiles
} from '@tabler/icons-react';
import { Link, useRouter } from '@tanstack/react-router';
import BackToTopAffix from '@/utils/BackToTopAffix';
import { ColorSchemeToggle } from '@/components/common/ColorSchemeToggle';

const navigation = [
    { label: 'Overview', icon: IconDashboard, href: '/dashboard' },
    { label: 'Analytics', icon: IconChartBar, href: '/dashboard/analytics' },
    { label: 'Files', icon: IconFiles, href: '/dashboard/files' },
    { label: 'Profile', icon: IconUser, href: '/dashboard/profile' },
    { label: 'Settings', icon: IconSettings, href: '/dashboard/settings' },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();
    const router = useRouter();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    <Group>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <Text size="xl" fw={700} variant="gradient" gradient={{ from: 'violet', to: 'grape' }}>
                            Dashboard
                        </Text>
                    </Group>

                    <Group gap="sm">
                        <ColorSchemeToggle />
                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <UnstyledButton>
                                    <Group gap="xs">
                                        <Avatar color="violet" radius="xl">
                                            JD
                                        </Avatar>
                                        <div style={{ flex: 1 }}>
                                            <Text size="sm" fw={500}>
                                                John Doe
                                            </Text>
                                            <Text c="dimmed" size="xs">
                                                john@example.com
                                            </Text>
                                        </div>
                                        <IconChevronDown size={16} />
                                    </Group>
                                </UnstyledButton>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>Account</Menu.Label>
                                <Menu.Item leftSection={<IconUser size={14} />}>
                                    Profile
                                </Menu.Item>
                                <Menu.Item leftSection={<IconSettings size={14} />}>
                                    Settings
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item
                                    leftSection={<IconLogout size={14} />}
                                    color="red"
                                    onClick={() => router.navigate({ to: '/' })}
                                >
                                    Logout
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <AppShell.Section grow>
                    {navigation.map((item) => (
                        <NavLink
                            key={item.href}
                            component={Link}
                            to={item.href}
                            label={item.label}
                            leftSection={<item.icon size={20} stroke={1.5} />}
                            style={{ borderRadius: 'var(--mantine-radius-md)', marginBottom: rem(4) }}
                        />
                    ))}
                </AppShell.Section>

                <AppShell.Section>
                    <NavLink
                        component={Link}
                        to="/"
                        label="Back to Home"
                        leftSection={<IconHome size={20} stroke={1.5} />}
                        style={{ borderRadius: 'var(--mantine-radius-md)' }}
                    />
                </AppShell.Section>
            </AppShell.Navbar>

            <AppShell.Main>
                <Container size="xl">
                    {children}
                </Container>
                <BackToTopAffix />
            </AppShell.Main>
        </AppShell>
    );
}
