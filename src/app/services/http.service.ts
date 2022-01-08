import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { APIResponse, Game } from '../models';
import { environment as env } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    getGameList(
        ordering?: string,
        search?: string,
        page?: string,
    ): Observable<APIResponse<Game>> {
        let params = new HttpParams()
        ordering && (params = params.append('ordering', ordering))
        search && (params = params.append('search', search))
        page && (params = params.append('page', page))
        
        return this.http.get<APIResponse<Game>>(`${env. BASE_URL}/games`, { params });
    }

    getGameDetails(id: string): Observable<Game> {
        const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
        const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
        const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);

        return forkJoin({
            gameInfoRequest,
            gameTrailersRequest,
            gameScreenshotsRequest,
        }).pipe(
            map((resp: any) => {
                return {
                    ...resp['gameInfoRequest'],
                    screenshots: resp['gameScreenshotsRequest']?.results,
                    trailers: resp['gameTrailersRequest']?.results,
                }
            })
        )
    }
}
