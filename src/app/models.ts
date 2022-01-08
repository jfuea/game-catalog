export interface Game {
    id: string;
    background_image: string;
    description: string;
    genres: Array<Genre>;
    metacritic_url: string;
    metacritic: number;
    name: string;
    parent_platforms: Array<ParentPlatform>;
    platforms: Array<Platform>;
    publishers: Array<Publisher>;
    released: string;
    website: string;
    ratings: Array<Rating>;
    screenshots: Array<Screenshot>;
    trailers: Array<Trailer>;
}

export interface APIResponse<T> {
    results: Array<T>
    count: number;

}

export interface ParentPlatform {
    platform: PlatformContent;
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

export interface Platform {
    platform: PlatformContent;
    released_at: string;
}

export interface PlatformContent {
    games_count: number;
    id: number;
    image: string;
    image_background: string;
    name: string;
    slug: string;
    year_end: number;
}

export interface Publisher {
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
}

export interface Rating {
    id: number;
    count: number;
    percent: number;
    title: string;
}

export interface Screenshot {
    id: number;
    height: number;
    image: string;
    is_deleted: boolean;
    width: number;
}

export interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: object;
}