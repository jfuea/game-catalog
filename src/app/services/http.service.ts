import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http"; 
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // constructor(private http: HttpClient) { }

  // getGameList(

  // ): Observable<APIResponse<Game>> {
  //   return this.http.get<APIResponse<Game>>('https://api.rawg.io/api/games?page_size=10');
  // }
}
