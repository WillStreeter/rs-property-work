/**
 * Created by williestreeter on 10/22/17.
 */
/**
 * Created by willstreeter on 9/8/17.
 */
import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../data-layer/ngrx-data/reducers/index';
import { PropertyModel } from '../../business-layer/models/index';

@Injectable()
export class DataStructureServices {

     constructor(){}

     createPropertiesModels(propertyData:any): PropertyModel[] {
        let propertyModels:PropertyModel[] = [];
        propertyData.forEach((element) => {
            let monthlyRent = element.financial  && element.financial.monthlyRent ? element.financial.monthlyRent : 0;
            let listPrice =  element.financial && element.financial.listPrice ? element.financial.listPrice: 0;
            let address1 =   element.address.address1?  element.address.address1:'';
            let city =   element.address.city?  element.address.city:'';
            let county =   element.address.county?  element.address.county:'';
            let country =   element.address.country?  element.address.country:'';
            let district =   element.address.district?  element.address.district:'';
            let state =   element.address.state?  element.address.state:'';
            let  propModel:PropertyModel = <PropertyModel>{}
            propModel.id= element.id,
                // address.address1
            propModel.address1= address1,
                // address.city
            propModel.city= city,
                // address.county
            propModel.county= county,
                // address.country
            propModel.country= country,
                // address.district
            propModel.district= district,
                // address.state
            propModel.state= state,
                // address.zip
            propModel.zip= element.address.zip,
                // address.zipPlus4
            propModel.zipPlus4= element.address.zipPlus4,
                //combined
            propModel.addressCombined =  address1+' '+city+' '+
                                         county+' '+state+' '+
                                         element.address.zip+' '+country,
                // physical.yearBuilt
            propModel.yearBuilt = element.physical ? element.physical.yearBuilt : '-',
                // financial.listPrice
            propModel.listPrice=  listPrice,
                // financial.monthlyRent
            propModel.monthlyRent=  monthlyRent;
                //combined
            propModel.grossYield=  (monthlyRent * 12 / listPrice)
            propertyModels.push(propModel)
        })

        return propertyModels;
    }
}