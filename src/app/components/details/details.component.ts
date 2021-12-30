import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    gameRating: number = 0;
    constructor() {}

    ngOnInit(): void {}

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
}
