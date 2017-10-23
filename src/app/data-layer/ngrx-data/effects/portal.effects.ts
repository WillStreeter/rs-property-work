import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect  } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as portalActions from '../actions/portal.actions';
import * as propertyActions from '../actions/properties.actions';
import * as fromRoot from '../reducers/index';



@Injectable()
export class PortalEffects {

    @Effect()  updateAddRowRevealState = this.actions$
      .ofType(propertyActions.PropertiesTypes.ADD_PROPERTY_TO_COLLECTION_SUCCESS)
      .map( (action:propertyActions.AddPropertyToCollectionSuccess) => action.payload )
      .switchMap(payload =>{
            return Observable.of( new portalActions.UpdateAddRowProperty(false));
        });

  constructor(private store:Store<fromRoot.State>,
              private actions$: Actions
             ) {  }
}
