import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { APIResponse, Game } from 'src/app/models';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    sort!: string;
    games!: Array<Game>;
    private routerSub! : Subscription;
    private gameSub! : Subscription;

    constructor(
        private httpService: HttpService,
        private activatedRouter: ActivatedRoute,
        private router: Router,
    ) { }


    ngOnDestroy(): void {
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
        if (this.gameSub) {
            this.gameSub.unsubscribe();
        }
    }

    ngOnInit(): void {
        this.routerSub = this.activatedRouter.params.subscribe((params: Params) => {
            if (params['game-search']){
                this.searchGames('metacritic', params['game-search']);
            } else {
                this.searchGames('metacritic');
            }
        })
    }

    searchGames(sort: string, search?: string) {
        this.gameSub = this.httpService.getGameList(sort, search).subscribe(
            (gameList: APIResponse<Game>) => {
                this.games = gameList.results;
                console.log(gameList);
            }
        )
    }

    openDetails(game: Game) {
        this.router.navigate(['details', game.id]);
    }
}
