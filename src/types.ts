export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    currentPage: number;
    totalPages: number;
    limit: number;
    pagination: {
        currentPage: number;
        totalPages: number;
    }
}
