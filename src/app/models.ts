export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: number;
    website: string;
    parent_platforms: Array<ParentPlatform>;
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