import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from "@angular/router";
import { APIResponse, Game } from 'src/app/models';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    sort?: string;
    games!: Array<Game>;
    constructor(
        private httpService: HttpService,
        private activatedRouter: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.searchGames("waht");
    }

    searchGames(sort: string){
        this.httpService.getGameList().subscribe(
            (gameList: APIResponse<Game>) => {
                this.games = gameList.results;
                console.log(gameList);
            }
        )
    }
}
