/**
 * Environment configuration
 * Add your environment variables to .env.local
 */

export const env = {
    // API Configuration
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com',
    apiTimeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 30000,

    // App Configuration
    appName: process.env.NEXT_PUBLIC_APP_NAME || 'Next.js Starter',
    appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

    // Feature Flags
    enableDevTools: process.env.NEXT_PUBLIC_ENABLE_DEV_TOOLS === 'true' || process.env.NODE_ENV === 'development',
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',

    // Environment
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
} as const;

// Validate required environment variables
export function validateEnv() {
    const required: (keyof typeof env)[] = ['apiUrl', 'appName'];

    for (const key of required) {
        if (!env[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
    }
}

// Type-safe environment variable access
export type Env = typeof env;
