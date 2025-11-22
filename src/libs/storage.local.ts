import { LocalStorageKeys } from "./storage.keys";

export function setLocalStorage<T>(
    key: LocalStorageKeys,
    value: T
) {
    if (typeof window !== "undefined" && value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export function getLocalStorage<T>(key: LocalStorageKeys): T | null {
    if (typeof window !== "undefined") {
        const item = localStorage.getItem(key);
        try {
            return item && item !== "undefined" ? (JSON.parse(item) as T) : null;
        } catch (error) {
            console.error(
                `Invalid JSON in localStorage for key "${key}":`,
                item,
                error
            );
            return null;
        }
    }
    return null;
}

export function removeLocalStorage(key: LocalStorageKeys) {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key);
    }
}

export function clearLocalStorage() {
    if (typeof window !== "undefined") {
        localStorage.clear();
    }
}
