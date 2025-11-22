import { useState, useEffect, useCallback } from 'react';

interface UseAsyncState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
    execute: (...args: unknown[]) => Promise<void>;
    reset: () => void;
}

/**
 * Hook for handling async operations with loading, error, and data states
 */
export function useAsync<T>(
    asyncFunction: (...args: unknown[]) => Promise<T>,
    immediate = false
): UseAsyncState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState<Error | null>(null);

    const execute = useCallback(
        async (...args: unknown[]) => {
            setLoading(true);
            setError(null);
            try {
                const result = await asyncFunction(...args);
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'));
            } finally {
                setLoading(false);
            }
        },
        [asyncFunction]
    );

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { data, loading, error, execute, reset };
}
