// src/utils/selectTransform.ts

type Option = { value: string; label: string };

export const toOptions = <T>(
    items: T[] = [],
    valueKey: keyof T,
    labelKey: keyof T
): Option[] =>
    items.map((item) => ({
        value: String(item[valueKey]),
        label: String(item[labelKey]),
    }));

export function enumToOptions<T extends Record<string, string>>(enumObj: T): Option[] {
    return Object.entries(enumObj).map(([key, value]) => ({
        value,
        label: key.charAt(0) + key.slice(1).toLowerCase(),
    }));
}