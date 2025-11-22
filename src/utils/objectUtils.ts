export const isObjectEmpty = (obj: Record<string, unknown>): boolean => {
    if (!obj || typeof obj !== "object") return true;

    return Object.values(obj).every((value) => {
        if (typeof value === "string") return value.trim() === "";
        return value === null || value === undefined;
    });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getError = (error: any): string => {
    return (
        error?.response?.data?.message || error?.message || "Something went wrong"
    );
};
