'use client';

import { Container, Paper, Stack, Text, Box } from '@mantine/core';
import BackToTopAffix from '@/utils/BackToTopAffix';

export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <Container size="xs">
                <Stack gap="lg">
                    <Text
                        size="xl"
                        fw={900}
                        ta="center"
                        c="white"
                        style={{
                            fontSize: '2rem',
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        }}
                    >
                        Welcome Back
                    </Text>
                    <Paper
                        shadow="xl"
                        p="xl"
                        radius="lg"
                        withBorder
                    >
                        {children}
                    </Paper>
                </Stack>
            </Container>
            <BackToTopAffix />
        </Box>
    );
}
