import {createSelector, createFeatureSelector} from '@ngrx/store';
import {PropertyModel,
         PropertyAddModel,
         PropertyCollectionModel} from '../../../../business-layer/models';
import { DataStructureServices }  from '../../../../business-layer/helpers/data.structures.service';
import * as propertiesActions from '../../actions/properties.actions';
import * as PropertyActionTypes from '../../../../business-layer/shared-types/actions/properties.action.types';

export  interface State {
  ids: string[];
  entities: { [id: string]: PropertyCollectionModel };
  currentSubSet: PropertyModel[];
  currentCollectionId: string;
}

export const initialState: State = {
  ids: [],
  entities: {},
  currentSubSet: [],
  currentCollectionId: ''
};

const dataStructureServices = new DataStructureServices();

export function reducer(state = initialState, action: propertiesActions.Actions): State {
  switch (action.type) {
      case PropertyActionTypes.FETCH_PROPERTIES_COLLECTION_SUCCESS:{
          if(action.payload) {
              let  propertiesCollection: PropertyCollectionModel = <PropertyCollectionModel>{};
              propertiesCollection.id = '' + state.ids.length + Math.floor(Math.random() * (100 - 1)) + 1,
              propertiesCollection.properties = dataStructureServices.createPropertiesModels(action.payload);
              if (state.ids.indexOf(propertiesCollection.id) > -1) {
                return state;
              }

             state = Object.assign( {
                                        currentSubSet: state.currentSubSet,
                                        ids: [ ...state.ids, propertiesCollection.id ],
                                        entities: Object.assign({}, state.entities, {
                                          [propertiesCollection.id]: propertiesCollection
                                        }),
                                        currentCollectionId: propertiesCollection.id,
                                      });
          }
             return state;
      }


      case PropertyActionTypes.UPDATE_PROPERTY_IN_COLLECTION_SUCCESS:{
           if(action.payload) {
                const propertyUpdate = <PropertyModel>(action.payload);
                let currentPropertyCollection: PropertyCollectionModel = state.entities[state.currentCollectionId];
                let propertyProducts: PropertyModel[] = [...currentPropertyCollection.properties ];
                propertyProducts = propertyProducts.map((product: PropertyModel) => {
                                         if(product.id === propertyUpdate.id){
                                             product = Object.assign({}, propertyUpdate);
                                         }
                                         return product;
                                     });

                 state = Object.assign( {
                                        currentSubSet:state.currentSubSet,
                                        ids: state.ids ,
                                        entities: Object.assign({}, state.entities, {
                                             [currentPropertyCollection.id]: <PropertyCollectionModel>({
                                                                           id: currentPropertyCollection.id,
                                                                           properties: propertyProducts})
                                        }),
                                        currentCollectionId:state.currentCollectionId
                                      });
           }
           return state
      }

      case PropertyActionTypes.ADD_PROPERTY_TO_COLLECTION_SUCCESS:{
           if(action.payload) {
                const propertyToAdd = <PropertyModel>(action.payload);
                let currentPropertyCollection: PropertyCollectionModel = state.entities[state.currentCollectionId];
                let propertyProducts: PropertyModel[] = [...currentPropertyCollection.properties, propertyToAdd];
                 state = Object.assign( {
                                        currentSubSet: state.currentSubSet,
                                        ids: state.ids ,
                                        entities: Object.assign({}, state.entities, {
                                             [currentPropertyCollection.id]: <PropertyCollectionModel>({
                                                                           id: currentPropertyCollection.id,
                                                                           properties: propertyProducts})
                                        }),
                                        currentCollectionId: state.currentCollectionId
                                      });
           }
           return state;

      }

      default: {
          return state;
        }
      }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getCurrentCollectionId = (state: State) => state.currentCollectionId;

export const getCurrentSubSet = (state: State) => state.currentSubSet;

export const getCurrentPropertiesCollection  = createSelector(getEntities, getCurrentCollectionId, (entities, currentCollectionId) => {
  return entities[currentCollectionId];
});

export const getCurrentPropertiesCollectionProperties  = createSelector(getEntities, getCurrentCollectionId, (entities, currentCollectionId) => {
    let properties = currentCollectionId && entities &&  entities[currentCollectionId] ? entities[currentCollectionId].properties : null;
    return properties? properties: [];
});


