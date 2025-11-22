'use client';

import { TextInput, TextInputProps } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from 'react';

interface SearchInputProps extends Omit<TextInputProps, 'onChange'> {
    onSearch: (value: string) => void;
    debounceMs?: number;
}

export function SearchInput({ onSearch, debounceMs = 300, ...props }: SearchInputProps) {
    const [value, setValue] = useState('');
    const [debounced] = useDebouncedValue(value, debounceMs);

    useEffect(() => {
        onSearch(debounced);
    }, [debounced, onSearch]);

    return (
        <TextInput
            {...props}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
            placeholder={props.placeholder || 'Search...'}
        />
    );
}
