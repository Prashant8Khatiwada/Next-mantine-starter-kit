type IImage =
    | string
    | File
    | Blob
    | (string | File | Blob)[]
    | null
    | undefined;

export const isValidImageSrc = (src: unknown): src is string => {
    return (
        typeof src === "string" &&
        (src.startsWith("/") ||
            src.startsWith("http://") ||
            src.startsWith("https://"))
    );
};

export function getImageSrc(image: IImage): string {
    if (!image) return "/images/car2.png";

    if (typeof image === "string") {
        if (
            image.startsWith("http") ||
            image.startsWith("data:image") ||
            image.startsWith("/") ||
            image.startsWith("blob:")
        ) {
            return image;
        }
        return "";
    }

    if (image instanceof File || image instanceof Blob) {
        try {
            return URL.createObjectURL(image);
        } catch (error) {
            console.error("Error creating object URL:", error);
            return "";
        }
    }

    return "";
}
