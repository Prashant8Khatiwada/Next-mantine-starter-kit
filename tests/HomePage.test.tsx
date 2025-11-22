import { render, screen } from '@testing-library/react';
import { HomePage } from '@/components/pages/HomePage';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme/theme';
import { vi, test, expect } from 'vitest';

// Mock Link
vi.mock('@tanstack/react-router', () => ({
    Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>,
}));

test('renders home page', () => {
    render(
        <MantineProvider theme={theme}>
            <HomePage />
        </MantineProvider>
    );
    expect(screen.getByText(/Next.js \+ TanStack Router/i)).toBeInTheDocument();
});
