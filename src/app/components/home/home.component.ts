import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    sort?: string;

    constructor(
        private httpService: HttpService,
        private activatedRouter: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        
    }

    // searchGames(sort: string){
    //     this.httpService

    // }
}
