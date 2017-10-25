import {Component, ChangeDetectionStrategy, Output, Input,
         SimpleChange, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { PropertyModel} from '../../../business-layer/models';
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerResponse } from '../../../business-layer/pubsub-broker/models/broker.response.model';
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';

@Component({
    moduleId: module.id,
    selector: 'app-properties-grid',
    templateUrl: 'properties.grid.component.html',
    styleUrls: ['properties.grid.component.scss']
})
export class PropertiesGridComponent implements OnInit {
    currentProperties: Observable<PropertyModel[]>;

    brokerRef: any;


    constructor(private bDS: BrokerDispatcherService ) {
        const brokerResponse: BrokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }

    ngOnInit() {
        this.currentProperties = this.brokerRef.storeObs.brokerProperties;
    }


    propertyModelUpdate(property: PropertyModel) {
         const note = this.brokerRef.storeDsp.UPDATE_PROPERTY_IN_COLLECTION_ATTEMPT;
         note.payLoad = property;
         this.bDS.dispatchBrokerAction(note);
    }

}
