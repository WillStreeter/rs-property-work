import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as portal from '../../actions/portal.actions';
import * as PortalActionTypes from '../../../../business-layer/shared-types/actions/portal.action.types';


export interface State {
  propertyAddLock:boolean;
  viewablePerPage:number;
  revealAddPropertytRow:boolean,
  currentPage:number;
  totalPages:number;
}

const initialState: State = {
  propertyAddLock:false,
  viewablePerPage:10,
  revealAddPropertytRow:false,
  currentPage:1,
  totalPages:5,
};

export function reducer(state = initialState, action: portal.Actions): State {
  switch (action.type) {
    case PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT: {
        return Object.assign({}, state,   {viewablePerPage:action.payload});
    }
    case PortalActionTypes.SET_CURRENT_PAGE_NUMBER: {
        return Object.assign({}, state,   {currentPage:action.payload});
    }

    case PortalActionTypes.SET_PROPERTY_ADD_BTN_STATUS: {
        return Object.assign({}, state,   {propertyAddLock:action.payload});
    }
    case PortalActionTypes.UPDATE_REVEAL_PROPERTY_ADD_ROW: {
      return Object.assign({}, state,   {revealAddPropertyRow:action.payload, propertyAddLock:action.payload});
    }

    default:
      return state;
  }
}

export const getRevealAddPropertyRow= (state: State) => state.revealAddPropertytRow;
export const getViewablePerPage = (state: State) => state.viewablePerPage;
export const getCurrentPage = (state: State) => state.currentPage;
export const getPropertyAddLock= (state: State) => state.propertyAddLock;

