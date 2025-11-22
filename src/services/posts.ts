import { createPublicReactQueryApiService } from "@/api/react-query-service";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const postsService = createPublicReactQueryApiService<Post[]>(
    '/posts',
    ['posts']
);
