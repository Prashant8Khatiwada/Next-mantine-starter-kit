import { SessionKeys } from "./storage.keys";

const setSession = (
    key: SessionKeys,
    value: string | number | boolean | object | null
) => {
    if (typeof window !== "undefined" && value !== undefined) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
};

const getSession = (key: SessionKeys) => {
    if (typeof window !== "undefined") {
        const item = sessionStorage.getItem(key);
        try {
            return item && item !== "undefined" ? JSON.parse(item) : null;
        } catch (error) {
            console.error(
                `Invalid JSON in sessionStorage for key "${key}":`,
                item,
                error
            );
            return null;
        }
    }
    return null;
};

const removeSession = (key: SessionKeys) => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem(key);
    }
};

const clearSession = () => {
    if (typeof window !== "undefined") {
        sessionStorage.clear();
    }
};

export { setSession, getSession, removeSession, clearSession };
