import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
    gameRating: number = 0;
    game!: Game;
    gameId!: string;
    routerSub!: Subscription;
    gameSub!: Subscription;
    constructor(
      private activatedRoute: ActivatedRoute,
      private httpService: HttpService,
      ) {}
  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.gameSub.unsubscribe();
  }

    ngOnInit(): void {
      this.routerSub = this.activatedRoute.params.subscribe((params: Params) => {
        this.gameId = params['id'];
        this.getGameDetails(this.gameId)
      })
    }

    getColor(value: number): string {
      if( value > 80){
        return 'green';
      } else if (value > 60) {
        return 'orange';
      } else if (value > 40) {
        return 'yellow';
      } else if (value > 20) {
        return 'orange';
      } else {
        return 'red';
      }
    }

    getGameDetails(id: string): void {
      this.gameSub = this.httpService.getGameDetails(id).subscribe((gameResp: Game) => {
        this.game = gameResp;
        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        }, 1000);
      })
    }
}
