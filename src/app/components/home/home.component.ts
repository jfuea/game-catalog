import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params } from "@angular/router";
import { APIResponse, Game } from 'src/app/models';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    sort!: string;
    games!: Array<Game>;
    constructor(
        private httpService: HttpService,
        private activatedRouter: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.activatedRouter.params.subscribe((params: Params) => {
            if (params['game-search']){
                this.searchGames('metacritic', params['game-search']);
            } else {
                this.searchGames('metacritic');
            }
        })
        this.searchGames("waht");
    }

    searchGames(sort: string, search?: string) {
        this.httpService.getGameList(sort, search).subscribe(
            (gameList: APIResponse<Game>) => {
                this.games = gameList.results;
                console.log(gameList);
            }
        )
    }
}
