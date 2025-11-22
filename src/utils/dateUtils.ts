export const isoToLocalString = (isoDate: string): string => {
    if (!isoDate) return "";

    const date = new Date(isoDate);
    const day = date.getDate();
    const suffix = getDaySuffix(day);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${day}${suffix} ${month}, ${year}`;
};

export const isoToNormalDate = (isoDate: string): string => {
    if (!isoDate) return "";

    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

const getDaySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

export const calculateDaysRemaining = (deletedAt: string): number => {
    const deletedDate = new Date(deletedAt);
    const expirationDate = new Date(deletedDate);
    expirationDate.setUTCDate(deletedDate.getUTCDate() + 30);
    const currentDate = new Date();
    const timeDiff = expirationDate.getTime() - currentDate.getTime();
    return Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
};

export const hoursToDays = (hours: number): string => {
    if (hours < 24) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 7) {
        return `${days} day${days === 1 ? '' : 's'} ago`;
    }
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
        return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
    }
    const months = Math.floor(days / 30);
    if (months < 12) {
        return `${months} month${months === 1 ? '' : 's'} ago`;
    }
    const years = Math.floor(days / 365);
    if (years < 10) {
        return `${years} year${years === 1 ? '' : 's'} ago`;
    }
    const decades = Math.floor(years / 10);
    if (decades < 10) {
        return `${decades} decade${decades === 1 ? '' : 's'} ago`;
    }
    const centuries = Math.floor(years / 100);
    return `${centuries} centur${centuries === 1 ? 'y' : 'ies'} ago`;
};

export const dateToDays = (createdAt: string) => {
    if (!createdAt) return "12:30";

    const now = new Date();
    const created = new Date(createdAt);
    const diffInHours = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return "New";
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return `${Math.floor(diffInDays / 7)}w ago`;
};
