'use client';

import { Container, Title, Text, Button, Group, Stack, Grid, Card, ThemeIcon, List, Box, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import {
    IconRocket,
    IconPalette,
    IconCode,
    IconBolt,
    IconShieldCheck,
    IconDeviceMobile,
    IconBrandReact,
    IconDatabase,
    IconSettings
} from '@tabler/icons-react';
import { FadeIn } from '../animations/FadeIn';
import { SlideIn } from '../animations/SlideIn';

const features = [
    {
        icon: IconBrandReact,
        title: 'Next.js 16',
        description: 'Built with the latest Next.js featuring Turbopack for lightning-fast development.',
        color: 'blue',
    },
    {
        icon: IconPalette,
        title: 'Mantine UI',
        description: 'Beautiful, accessible components with premium theming and dark mode support.',
        color: 'violet',
    },
    {
        icon: IconCode,
        title: 'TanStack Router',
        description: 'Type-safe routing with data loading, prefetching, and seamless navigation.',
        color: 'cyan',
    },
    {
        icon: IconDatabase,
        title: 'React Query',
        description: 'Powerful data fetching with caching, optimistic updates, and background sync.',
        color: 'green',
    },
    {
        icon: IconBolt,
        title: 'Framer Motion',
        description: 'Smooth, production-ready animations that enhance user experience.',
        color: 'orange',
    },
    {
        icon: IconShieldCheck,
        title: 'Type Safety',
        description: 'Full TypeScript support with strict typing and excellent DX.',
        color: 'red',
    },
    {
        icon: IconDeviceMobile,
        title: 'Responsive',
        description: 'Mobile-first design that looks perfect on all devices and screen sizes.',
        color: 'pink',
    },
    {
        icon: IconSettings,
        title: 'Developer Tools',
        description: 'ESLint, Prettier, Vitest, and more for a premium development experience.',
        color: 'grape',
    },
];

export function HomePage() {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '80px 0',
                }}
            >
                <Container size="lg">
                    <Stack align="center" gap="xl">
                        <FadeIn delay={0}>
                            <Title
                                order={1}
                                size={56}
                                ta="center"
                                style={{
                                    fontWeight: 900,
                                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                                }}
                            >
                                Next.js Starter Kit
                            </Title>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Text size="xl" ta="center" maw={700} style={{ opacity: 0.95 }}>
                                A production-ready starter featuring <strong>Next.js 16</strong>, <strong>Mantine UI</strong>,
                                <strong> TanStack Router</strong>, and <strong>Framer Motion</strong>.
                                Build beautiful, type-safe applications with the best developer experience.
                            </Text>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <Group gap="md">
                                <Button
                                    component={Link}
                                    to="/dashboard"
                                    size="lg"
                                    variant="filled"
                                    color="violet"
                                    leftSection={<IconRocket size={20} />}
                                    style={{
                                        boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                                    }}
                                >
                                    Get Started
                                </Button>
                                <Button
                                    component={Link}
                                    to="/auth/login"
                                    size="lg"
                                    variant="outline"
                                    c="white"
                                    style={{
                                        borderColor: 'white',
                                    }}
                                >
                                    View Demo
                                </Button>
                            </Group>
                        </FadeIn>
                    </Stack>
                </Container>
            </Box>

            {/* Features Section */}
            <Container size="lg" py={80}>
                <Stack gap="xl">
                    <SlideIn direction="up">
                        <Stack align="center" gap="md">
                            <Title order={2} ta="center">
                                Everything You Need to Build Amazing Apps
                            </Title>
                            <Text size="lg" c="dimmed" ta="center" maw={600}>
                                This starter kit includes all the modern tools and best practices
                                to help you ship faster and build better.
                            </Text>
                        </Stack>
                    </SlideIn>

                    <Grid gutter="lg" mt="xl">
                        {features.map((feature, index) => (
                            <Grid.Col key={feature.title} span={{ base: 12, sm: 6, md: 3 }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card
                                        shadow="sm"
                                        padding="lg"
                                        radius="md"
                                        withBorder
                                        h="100%"
                                        style={{
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <Stack gap="md">
                                            <ThemeIcon
                                                size={50}
                                                radius="md"
                                                variant="light"
                                                color={feature.color}
                                            >
                                                <feature.icon size={28} />
                                            </ThemeIcon>
                                            <div>
                                                <Text fw={600} size="lg">
                                                    {feature.title}
                                                </Text>
                                                <Text size="sm" c="dimmed" mt="xs">
                                                    {feature.description}
                                                </Text>
                                            </div>
                                        </Stack>
                                    </Card>
                                </motion.div>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Stack>
            </Container>

            {/* CTA Section */}
            <Box style={{ background: 'var(--mantine-color-gray-0)' }} py={60}>
                <Container size="md">
                    <SlideIn direction="up">
                        <Card shadow="lg" padding="xl" radius="lg">
                            <Stack align="center" gap="lg">
                                <Title order={2} ta="center">
                                    Ready to Build Something Amazing?
                                </Title>
                                <Text size="lg" c="dimmed" ta="center">
                                    Start building your next project with this powerful starter kit.
                                </Text>
                                <Divider w="100%" />
                                <List
                                    spacing="sm"
                                    size="md"
                                    center
                                    icon={
                                        <ThemeIcon color="teal" size={24} radius="xl">
                                            <IconShieldCheck size={16} />
                                        </ThemeIcon>
                                    }
                                >
                                    <List.Item>Production-ready configuration</List.Item>
                                    <List.Item>Comprehensive documentation</List.Item>
                                    <List.Item>Best practices and patterns</List.Item>
                                    <List.Item>Regular updates and maintenance</List.Item>
                                </List>
                                <Button
                                    component={Link}
                                    to="/dashboard"
                                    size="lg"
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'grape', deg: 135 }}
                                    leftSection={<IconRocket size={20} />}
                                >
                                    Explore Dashboard
                                </Button>
                            </Stack>
                        </Card>
                    </SlideIn>
                </Container>
            </Box>
        </Box>
    );
}
