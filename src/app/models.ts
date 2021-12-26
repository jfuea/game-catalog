export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: number;
    website: string;
}

export interface APIResponse<T> {
    results: Array<T>

}