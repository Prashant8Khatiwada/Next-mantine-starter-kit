'use client';

import { Component, ReactNode } from 'react';
import { Container, Title, Text, Button, Stack, Paper, Code } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <Container size="sm" py="xl">
                    <Paper shadow="md" p="xl" radius="md" withBorder>
                        <Stack align="center" gap="lg">
                            <IconAlertTriangle size={64} color="var(--mantine-color-red-6)" />
                            <Title order={2} ta="center">
                                Oops! Something went wrong
                            </Title>
                            <Text c="dimmed" ta="center">
                                We&apos;re sorry for the inconvenience. Please try refreshing the page.
                            </Text>
                            {this.state.error && (
                                <Code block w="100%">
                                    {this.state.error.message}
                                </Code>
                            )}
                            <Button
                                onClick={() => {
                                    this.setState({ hasError: false, error: null });
                                    window.location.reload();
                                }}
                                variant="gradient"
                                gradient={{ from: 'violet', to: 'grape' }}
                            >
                                Refresh Page
                            </Button>
                        </Stack>
                    </Paper>
                </Container>
            );
        }

        return this.props.children;
    }
}
