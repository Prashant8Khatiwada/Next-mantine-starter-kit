import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...inputs: (string | undefined | null | boolean)[]) {
    return twMerge(clsx(inputs));
}
