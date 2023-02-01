import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShowCaseService } from 'src/app/modules/show-case/services/show-case.service';

@Injectable()
export class ItemsEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('[Item List] Load items'),
    mergeMap(() => this.showCaseService.getDataApi()
      .pipe(
        map(items => ({ type: '[Item List] Loaded success', items})),
        //map(items => ({ type: '[Item List] Loaded success', items: items})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private showCaseService: ShowCaseService
  ) {}
}
