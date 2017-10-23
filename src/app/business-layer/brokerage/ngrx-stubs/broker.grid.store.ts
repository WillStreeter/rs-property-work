import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BrokerActionBuilder } from '../../pubsub-broker/services/broker.action.builder';
import { BrokerAction  } from '../../pubsub-broker/models/broker.action.model'
import * as fromRoot from '../../../data-layer/ngrx-data/reducers/index';
import * as propertyActions from '../../../data-layer/ngrx-data/actions/properties.actions';
import * as portalActions from '../../../data-layer/ngrx-data/actions/portal.actions';
import * as PropertyActionTypes from '../../shared-types/actions/properties.action.types';
import * as PortalActionTypes from '../../shared-types/actions/portal.action.types';

import { BrokerList } from './brokerlist';


@Injectable()
export class BrokerGridStore {
    brokerLabel: string = BrokerList.BROKER_GRID_STORE;
    constructor( private store: Store<fromRoot.State>,
                 private brkrActnBuilder: BrokerActionBuilder ) {
                        this.store.dispatch(new propertyActions.GetPropertiesCollection());
                 }

    getComponentSupplies(): any {
       return  Object.assign({
                   brokerLabel: this.brokerLabel,
                   storeObs: {
                        brokerProperties: this.store.select(fromRoot.getCurrentCollectionProperties),
                        brokerPortalState: this.store.select(fromRoot.getPortalState),
                    },
                   storeDsp: {
                       UPDATE_SORT_STATE: this.brkrActnBuilder.create(  PortalActionTypes.UPDATE_SORT_STATE,
                                                           this.brokerLabel,
                                                          null),

                       UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT: this.brkrActnBuilder.create(
                                                            PropertyActionTypes.UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT,
                                                            this.brokerLabel,
                                                             null),

                       SET_PROPERTY_ADD_BTN_STATUS: this.brkrActnBuilder.create(  PortalActionTypes.SET_PROPERTY_ADD_BTN_STATUS,
                           this.brokerLabel,
                           null),

                       UPDATE_REVEAL_PROPERTY_ADD_ROW: this.brkrActnBuilder.create(  PortalActionTypes.UPDATE_REVEAL_PROPERTY_ADD_ROW,
                           this.brokerLabel,
                           null),
                      }
                });

    }

    dispatchAction( brokerAction: BrokerAction ): void {
         switch ( brokerAction.actionType ) {
             case PortalActionTypes.SET_PROPERTY_ADD_BTN_STATUS:
                 this.store.dispatch(new portalActions.SetGarmentAddBtnStatus(brokerAction.payLoad));
                 break;
             case PropertyActionTypes.UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT:
                 this.store.dispatch(new propertyActions.UpdatePropertyAttempt(brokerAction.payLoad));
             break;
         }
    }
}


