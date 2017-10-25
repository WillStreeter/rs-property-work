import { Action } from '@ngrx/store';
import { PropertyModel,
         ErrorModel} from '../../../business-layer/models/index';

import * as  PropertiesActionTypes from '../../../business-layer/shared-types/actions/properties.action.types';


export const PropertiesTypes = PropertiesActionTypes;

export class GetPropertiesCollection implements Action {
 public readonly type = PropertiesActionTypes.FETCH_PROPERTIES_COLLECTION_ATTEMPT;
  constructor() {  }
}

export class GetPropertiesCollectionFailure implements Action {
 public readonly type = PropertiesActionTypes.FETCH_PROPERTIES_COLLECTION_FAILURE;
  constructor(public payload: ErrorModel) {  }
}


export class GetPropertiesCollectionSuccess implements Action {
 public readonly type = PropertiesActionTypes.FETCH_PROPERTIES_COLLECTION_SUCCESS;
  constructor(public payload: any) {  }
}

export class UpdatePropertyAttempt implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT;
 constructor(public payload: any) {  }
}

export class UpdatePropertyFailure implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTY_IN_COLLECTION_FAILURE;
 constructor(public payload: ErrorModel) {  }
}


export class UpdatePropertySuccess implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTY_IN_COLLECTION_SUCCESS;
 constructor(public payload: PropertyModel) {  }
}



export type Actions =
GetPropertiesCollection
     | GetPropertiesCollectionFailure
     | GetPropertiesCollectionSuccess
     | UpdatePropertyAttempt
     | UpdatePropertyFailure
     | UpdatePropertySuccess;




