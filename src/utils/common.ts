// src/utils/common.ts

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEqual = <T extends { [key: string]: any }>(obj1: T, obj2: T): boolean => {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
    if (obj1 === null || obj2 === null) return obj1 === obj2;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!isEqual(obj1[key], obj2[key])) return false;
    }

    return true;
};

export const getCurrentUrl = (): string => {
    if (typeof window !== 'undefined') {
        return window.location.href;
    }
    return '';
};


export const shortenNumber = (num: number): string => {
    if (num < 1000) return num.toString();
    if (num >= 10000000) {
        // Crore
        return (num / 10000000).toFixed(num % 10000000 === 0 ? 0 : 1).replace(/\.0$/, '') + ' Cr';
    }
    if (num >= 100000) {
        // Lakh
        return (num / 100000).toFixed(num % 100000 === 0 ? 0 : 1).replace(/\.0$/, '') + ' L';
    }
    if (num >= 1000) {
        // Thousand
        return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
};

// utils/formDataUtils.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toFormData(obj: Record<string, any>): FormData {
    const formData = new FormData();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const appendValue = (key: string, value: any) => {
        if (value instanceof File) {
            formData.append(key, value);
        } else if (Array.isArray(value)) {
            value.forEach((v, i) => appendValue(`${key}[${i}]`, v));
        } else if (value && typeof value === "object") {
            Object.entries(value).forEach(([k, v]) => appendValue(`${key}[${k}]`, v));
        } else if (typeof value === "boolean") {
            formData.append(key, value ? "true" : "false");
        } else if (value !== undefined && value !== null) {
            formData.append(key, value.toString());
        }
    };

    Object.entries(obj).forEach(([key, value]) => appendValue(key, value));

    return formData;
}

