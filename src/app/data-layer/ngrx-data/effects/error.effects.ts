import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect  } from '@ngrx/effects';

import * as errorActions from '../actions/error.actions';



@Injectable()
export class ErrorEffects {


 @Effect() catchAllRemoteError$ = this.actions$
  .ofType(errorActions.ErrorTypes.REPORT_ERROR)
  .map((action:errorActions.ReportError) => action.payload)
  .switchMap(payload => {
       return Observable.of(this.router.navigateByUrl('/error'));
  }  );



    constructor(
        private actions$: Actions,
        private router: Router

    ) {  }


}
