import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

// Custom color palette - vibrant and modern
const primaryColor: MantineColorsTuple = [
    '#e6f7ff',
    '#bae7ff',
    '#91d5ff',
    '#69c0ff',
    '#40a9ff',
    '#1890ff',
    '#096dd9',
    '#0050b3',
    '#003a8c',
    '#002766',
];

const accentColor: MantineColorsTuple = [
    '#fff0f6',
    '#ffe6f0',
    '#fcc2d7',
    '#fa9dbf',
    '#f77ea8',
    '#f56a99',
    '#f45d8f',
    '#d94d7c',
    '#c24370',
    '#aa3863',
];

export const theme = createTheme({
    primaryColor: 'brand',
    defaultRadius: 'md',

    // Custom font stack with modern web fonts
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMonospace: 'JetBrains Mono, Monaco, Courier, monospace',
    headings: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '700',
        sizes: {
            h1: { fontSize: rem(36), lineHeight: '1.2', fontWeight: '900' },
            h2: { fontSize: rem(30), lineHeight: '1.3', fontWeight: '800' },
            h3: { fontSize: rem(24), lineHeight: '1.4', fontWeight: '700' },
            h4: { fontSize: rem(20), lineHeight: '1.5', fontWeight: '700' },
            h5: { fontSize: rem(18), lineHeight: '1.5', fontWeight: '600' },
            h6: { fontSize: rem(16), lineHeight: '1.5', fontWeight: '600' },
        },
    },

    // Custom color palette
    colors: {
        brand: primaryColor,
        accent: accentColor,
    },

    // Spacing scale
    spacing: {
        xs: rem(8),
        sm: rem(12),
        md: rem(16),
        lg: rem(24),
        xl: rem(32),
    },

    // Border radius
    radius: {
        xs: rem(4),
        sm: rem(8),
        md: rem(12),
        lg: rem(16),
        xl: rem(24),
    },

    // Shadows with depth
    shadows: {
        xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
        md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
        lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
        xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
    },

    // Component defaults with premium styling
    components: {
        Button: {
            defaultProps: {
                size: 'md',
                variant: 'filled',
            },
            styles: {
                root: {
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },
        Card: {
            defaultProps: {
                shadow: 'sm',
                radius: 'md',
                withBorder: true,
            },
            styles: {
                root: {
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        Paper: {
            defaultProps: {
                shadow: 'xs',
                radius: 'md',
                p: 'md',
            },
        },
        TextInput: {
            styles: {
                input: {
                    transition: 'all 0.2s ease',
                    '&:focus': {
                        transform: 'scale(1.01)',
                    },
                },
            },
        },
        PasswordInput: {
            styles: {
                input: {
                    transition: 'all 0.2s ease',
                    '&:focus': {
                        transform: 'scale(1.01)',
                    },
                },
            },
        },
        Modal: {
            defaultProps: {
                centered: true,
                overlayProps: {
                    backgroundOpacity: 0.55,
                    blur: 3,
                },
            },
        },
    },

    // Active styles
    activeClassName: 'mantine-active',
    focusClassName: 'mantine-focus',

    // Other settings
    respectReducedMotion: true,
    cursorType: 'pointer',
});
