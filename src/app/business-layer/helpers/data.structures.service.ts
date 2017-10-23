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
            let  propModel:PropertyModel = <PropertyModel>{}
            propModel.id= element.id,
                // address.address1
            propModel.address1= element.address.address1,
                // address.city
            propModel.city= element.address.city,
                // address.county
            propModel.county= element.address.county,
                // address.country
            propModel.country= element.address.country,
                // address.district
            propModel.district= element.address.district,
                // address.state
            propModel.state= element.address.state,
                // address.zip
            propModel.zip= element.address.zip,
                // address.zipPlus4
            propModel.zipPlus4= element.address.zipPlus4,
                //combined
            propModel.addressCombined =  element.address.address1+' '+element.address.city+' '+
                                         element.address.county+' '+element.address.state+' '+
                                         element.address.zip+' '+element.address.country,
                // physical.yearBuilt
            propModel.yearBuilt = element.physical ? element.physical.yearBuilt : 'no date',
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