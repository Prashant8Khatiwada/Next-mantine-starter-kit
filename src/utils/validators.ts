/**
 * Validation utilities for forms and data
 */

export const validators = {
    email: (value: string): string | null => {
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Invalid email address';
        }
        return null;
    },

    password: (value: string, minLength = 8): string | null => {
        if (!value) return 'Password is required';
        if (value.length < minLength) {
            return `Password must be at least ${minLength} characters`;
        }
        return null;
    },

    required: (value: unknown): string | null => {
        if (!value || (typeof value === 'string' && !value.trim())) {
            return 'This field is required';
        }
        return null;
    },

    minLength: (min: number) => (value: string): string | null => {
        if (!value || value.length < min) {
            return `Must be at least ${min} characters`;
        }
        return null;
    },

    maxLength: (max: number) => (value: string): string | null => {
        if (value && value.length > max) {
            return `Must be at most ${max} characters`;
        }
        return null;
    },

    url: (value: string): string | null => {
        if (!value) return null;
        try {
            new URL(value);
            return null;
        } catch {
            return 'Invalid URL';
        }
    },

    phone: (value: string): string | null => {
        if (!value) return null;
        if (!/^\+?[\d\s-()]+$/.test(value)) {
            return 'Invalid phone number';
        }
        return null;
    },

    number: (value: string): string | null => {
        if (!value) return null;
        if (isNaN(Number(value))) {
            return 'Must be a valid number';
        }
        return null;
    },

    min: (min: number) => (value: string | number): string | null => {
        const num = typeof value === 'string' ? Number(value) : value;
        if (num < min) {
            return `Must be at least ${min}`;
        }
        return null;
    },

    max: (max: number) => (value: string | number): string | null => {
        const num = typeof value === 'string' ? Number(value) : value;
        if (num > max) {
            return `Must be at most ${max}`;
        }
        return null;
    },
};

/**
 * Compose multiple validators
 */
export function composeValidators(...validators: Array<(value: unknown) => string | null>) {
    return (value: unknown): string | null => {
        for (const validator of validators) {
            const error = validator(value);
            if (error) return error;
        }
        return null;
    };
}
