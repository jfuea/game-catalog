import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { APIResponse, Game } from 'src/app/models';
import { Observable, Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    sort!: string;
    search!: string;
    page!: string;

    games!: Array<Game>;
    countOfGames: number = 0;
    pageIndex: number = 0;
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
        this.routerSub = this.activatedRouter.queryParams.subscribe(
            (params: Params) => {
                params['sort'] && (this.sort = params['sort']);
                params['search'] && (this.search = params['search']);
                params['page'] && (this.page = params['page']);

                this.pageIndex = params['page'] || 0;
                this.searchGames(params['sort'], params['search'], params['page']);
            }
        );
    }

    searchGames(sort?: string, search?: string, page?: string) {
        if (page) {
            page = String(Number(page) + 1);
        }
        this.gameSub = this.httpService.getGameList(sort, search, page).subscribe(
            (gameList: APIResponse<Game>) => {
                this.games = gameList.results;
                if (search && gameList.count > 500) {
                    this.countOfGames = 500;
                }
                else {
                    this.countOfGames = gameList.count;
                }
                    
            }
        )
    }

    openDetails(game: Game) {
        this.router.navigate(['details', game.id]);
    }

    onPageChange(page: PageEvent) {
        this.router.navigate(
            ['/games'],
            { queryParams: { page: page.pageIndex }, queryParamsHandling: 'merge'}
        )
    }

    onSortChange(sort: string) {
        this.router.navigate(
            ['/games'],
            { queryParams: { sort: sort }, queryParamsHandling: 'merge'}
        )
    }
}
