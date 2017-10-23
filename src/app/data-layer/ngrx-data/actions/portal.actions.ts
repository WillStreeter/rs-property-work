import { Action } from '@ngrx/store';
import * as PortalActionTypes from '../../../business-layer/shared-types/actions/portal.action.types';

export const PortalTypes = PortalActionTypes;


export class UpdateViewablePerPageCount implements Action {
  public readonly type = PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT;
    constructor(public payload: number) {  }
}

export class SetCurrentPageNumber implements Action {
  public readonly type = PortalActionTypes.SET_CURRENT_PAGE_NUMBER;
     constructor(public payload: number) {  }
}

export class UpdateAddRowProperty implements Action{
 public readonly type = PortalActionTypes.UPDATE_REVEAL_PROPERTY_ADD_ROW;
  constructor(public payload: boolean) {  }
}

export class SetGarmentAddBtnStatus implements Action{
    public readonly type = PortalActionTypes.SET_PROPERTY_ADD_BTN_STATUS;
    constructor(public payload: boolean) {  }
}


export type Actions
  = UpdateViewablePerPageCount
  | SetCurrentPageNumber
  | UpdateAddRowProperty
  | SetGarmentAddBtnStatus;
