import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { PropertiesModel,
         ErrorModel,
         PropertiesAddModel,
         PropertiesCollectionModel,
         PropertiesSubsetModel,
         PropertiesSortModel} from '../../../business-layer/models/index';

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

export class UpdatePropertiesAttempt implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTIES_IN_COLLECTION_ATTEMPT;
 constructor(public payload:any) {  }
}

export class UpdatePropertiesFailure implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTIES_IN_COLLECTION_FAILURE;
 constructor(public payload:ErrorModel) {  }
}


export class UpdatePropertiesSuccess implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_PROPERTIES_IN_COLLECTION_SUCCESS;
 constructor(public payload:PropertiesModel) {  }
}


export class AddPropertiesToCollectionAttempt implements Action {
 public readonly type =  PropertiesActionTypes.ADD_PROPERTIES_TO_COLLECTION_ATTEMPT;
 constructor(public payload:any) {  }
}

export class AddPropertiesToCollectionFailure implements Action {
 public readonly type =  PropertiesActionTypes.ADD_PROPERTIES_TO_COLLECTION_FAILURE;
 constructor(public payload:ErrorModel) {  }
}

export class AddPropertiesToCollectionSuccess implements Action {
 public readonly type =  PropertiesActionTypes.ADD_PROPERTIES_TO_COLLECTION_SUCCESS;
 constructor(public payload:PropertiesModel) {  }
}

export class GetSubsetOfCollection implements Action {
 public readonly type =  PropertiesActionTypes.GET_SUBSET_OF_COLLECTION;
  constructor(public payload:PropertiesSubsetModel) {  }
}

export class UpdateSortedCollection implements Action {
 public readonly type =  PropertiesActionTypes.UPDATE_SORTED_COLLECTION;
  constructor(public payload:PropertiesSortModel) {  }
}
export class SearchCollectionByTerm implements Action {
 public readonly type =  PropertiesActionTypes.SEARCH_COLLECTION_BY_TERM;
 constructor(public payload:string) {  }
}

export type Actions =
GetPropertiesCollection
     | GetPropertiesCollectionFailure
     | GetPropertiesCollectionSuccess
     | UpdatePropertiesAttempt
     | UpdatePropertiesFailure
     | UpdatePropertiesSuccess
     | AddPropertiesToCollectionAttempt
     | AddPropertiesToCollectionFailure
     | AddPropertiesToCollectionSuccess
     | GetSubsetOfCollection
     | UpdateSortedCollection
     | SearchCollectionByTerm;




