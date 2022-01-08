import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  routerSub!: Subscription;

  textInput: string = '';

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerSub = this.activatedRouter.queryParams.subscribe(
      (params: Params) => {
          params['search'] && (this.textInput = params['search']);
      }
  );
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
        this.routerSub.unsubscribe();
    }
  }

  onSubmit(form: any) {
    this.router.navigate(
      ['/games'],
      { queryParams: { search: form.value.search }}
    )
  }

}
