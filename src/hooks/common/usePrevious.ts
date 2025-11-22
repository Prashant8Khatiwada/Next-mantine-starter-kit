import { useEffect, useState } from 'react';

/**
 * Hook that returns the previous value of a state or prop
 */
export function usePrevious<T>(value: T): T | undefined {
    const [prev, setPrev] = useState<T>();

    useEffect(() => {
        setPrev(value);
    }, [value]);

    return prev;
}
