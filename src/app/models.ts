export interface Game {
    id: string;
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    parent_platforms: Array<ParentPlatform>;
    genres: Array<Genre>;
    metacritic: number;
}

export interface APIResponse<T> {
    results: Array<T>

}

export interface ParentPlatform {
    platform: {
        name: string;
        slug: string;
    }
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
}