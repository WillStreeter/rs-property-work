import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { PropertyModel,
         ErrorModel,
         PropertyAddModel,
         PropertyCollectionModel,
         PropertySubsetModel} from '../../../business-layer/models/index';

import * as  PropertiesActionTypes  from '../../../business-layer/shared-types/actions/properties.action.types';


export const PropertiesTypes = PropertiesActionTypes;

export class GetPropertiesCollection implements Action {
 public readonly type = PropertiesActionTypes.FETCH_PROPERTIES_COLLECTION_ATTEMPT;
  constructor() {  }
}

export class GetPropertiesCollectionFailure implements Action {
 public readonly type = PropertiesActionTypes.FETCH_PROPERTIES_COLLECTION_FAILURE;
  constructor(public payload:ErrorModel) {  }
}


export class GetPropertiesCollectionSuccess implements Action {
 public readonly type = PropertiesActionTypes.FETCH_PROPERTIES_COLLECTION_SUCCESS;
  constructor(public payload:any) {  }
}

export class UpdatePropertyAttempt implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT;
 constructor(public payload:any) {  }
}

export class UpdatePropertyFailure implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTY_IN_COLLECTION_FAILURE;
 constructor(public payload:ErrorModel) {  }
}


export class UpdatePropertySuccess implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTY_IN_COLLECTION_SUCCESS;
 constructor(public payload:PropertyModel) {  }
}


export class AddPropertyToCollectionAttempt implements Action {
 public readonly type =  PropertiesActionTypes.ADD_PROPERTY_TO_COLLECTION_ATTEMPT;
 constructor(public payload:any) {  }
}

export class AddPropertyToCollectionFailure implements Action {
 public readonly type =  PropertiesActionTypes.ADD_PROPERTY_TO_COLLECTION_FAILURE;
 constructor(public payload:ErrorModel) {  }
}

export class AddPropertyToCollectionSuccess implements Action {
 public readonly type =  PropertiesActionTypes.ADD_PROPERTY_TO_COLLECTION_SUCCESS;
 constructor(public payload:PropertyModel) {  }
}

export class GetSubsetOfCollection implements Action {
 public readonly type =  PropertiesActionTypes.GET_SUBSET_OF_COLLECTION;
  constructor(public payload:PropertySubsetModel) {  }
}


export type Actions =
GetPropertiesCollection
     | GetPropertiesCollectionFailure
     | GetPropertiesCollectionSuccess
     | UpdatePropertyAttempt
     | UpdatePropertyFailure
     | UpdatePropertySuccess
     | AddPropertyToCollectionAttempt
     | AddPropertyToCollectionFailure
     | AddPropertyToCollectionSuccess
     | GetSubsetOfCollection




