import { LocalStorageKeys } from "@/libs/storage.keys";
import { removeLocalStorage, setLocalStorage } from "@/libs/storage.local";


export const authService = {
    login: async (email: string) => {
        // Mock login
        await new Promise(resolve => setTimeout(resolve, 1000));
        const token = 'mock-token-' + Math.random().toString(36).substring(7);
        setLocalStorage(LocalStorageKeys.TOKEN, token);
        setLocalStorage(LocalStorageKeys.USER, { email });
        return { token, user: { email } };
    },
    logout: () => {
        removeLocalStorage(LocalStorageKeys.TOKEN);
        removeLocalStorage(LocalStorageKeys.USER);
    },
    isAuthenticated: () => {
        if (typeof window === 'undefined') return false;
        return !!localStorage.getItem(LocalStorageKeys.TOKEN);
    }
};
