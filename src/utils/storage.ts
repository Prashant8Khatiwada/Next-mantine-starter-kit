/**
 * Local Storage utility functions with type safety
 */

export enum LocalStorageKeys {
    TOKEN = "auth_token",
    USER = "user_data",
    THEME = "theme_preference",
    LANGUAGE = "language",
}

/**
 * Get item from localStorage with type safety
 */
export function getLocalStorage<T = string>(key: LocalStorageKeys): T | null {
    if (typeof window === "undefined") return null

    try {
        const item = window.localStorage.getItem(key)
        if (!item) return null

        // Try to parse as JSON, fallback to string
        try {
            return JSON.parse(item) as T
        } catch {
            return item as T
        }
    } catch (error) {
        console.error(`Error reading from localStorage: ${error}`)
        return null
    }
}

/**
 * Set item in localStorage with automatic JSON stringification
 */
export function setLocalStorage<T>(key: LocalStorageKeys, value: T): boolean {
    if (typeof window === "undefined") return false

    try {
        const stringValue = typeof value === "string" ? value : JSON.stringify(value)
        window.localStorage.setItem(key, stringValue)
        return true
    } catch (error) {
        console.error(`Error writing to localStorage: ${error}`)
        return false
    }
}

/**
 * Remove item from localStorage
 */
export function removeLocalStorage(key: LocalStorageKeys): boolean {
    if (typeof window === "undefined") return false

    try {
        window.localStorage.removeItem(key)
        return true
    } catch (error) {
        console.error(`Error removing from localStorage: ${error}`)
        return false
    }
}

/**
 * Clear all localStorage
 */
export function clearLocalStorage(): boolean {
    if (typeof window === "undefined") return false

    try {
        window.localStorage.clear()
        return true
    } catch (error) {
        console.error(`Error clearing localStorage: ${error}`)
        return false
    }
}

/**
 * Check if a key exists in localStorage
 */
export function hasLocalStorage(key: LocalStorageKeys): boolean {
    if (typeof window === "undefined") return false
    return window.localStorage.getItem(key) !== null
}
