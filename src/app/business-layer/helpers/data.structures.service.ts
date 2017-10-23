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
     stateHash: Object = Object.assign({},
                                       { 'AL': 'Alabama',
                                                'AK': 'Alaska',
                                                'AS': 'American Samoa',
                                                'AZ': 'Arizona',
                                                'AR': 'Arkansas',
                                                'CA': 'California',
                                                'CO': 'Colorado',
                                                'CT': 'Connecticut',
                                                'DE': 'Delaware',
                                                'DC': 'District Of Columbia',
                                                'FM': 'Federated States Of Micronesia',
                                                'FL': 'Florida',
                                                'GA': 'Georgia',
                                                'GU': 'Guam',
                                                'HI': 'Hawaii',
                                                'ID': 'Idaho',
                                                'IL': 'Illinois',
                                                'IN': 'Indiana',
                                                'IA': 'Iowa',
                                                'KS': 'Kansas',
                                                'KY': 'Kentucky',
                                                'LA': 'Louisiana',
                                                'ME': 'Maine',
                                                'MH': 'Marshall Islands',
                                                'MD': 'Maryland',
                                                'MA': 'Massachusetts',
                                                'MI': 'Michigan',
                                                'MN': 'Minnesota',
                                                'MS': 'Mississippi',
                                                'MO': 'Missouri',
                                                'MT': 'Montana',
                                                'NE': 'Nebraska',
                                                'NV': 'Nevada',
                                                'NH': 'New Hampshire',
                                                'NJ': 'New Jersey',
                                                'NM': 'New Mexico',
                                                'NY': 'New York',
                                                'NC': 'North Carolina',
                                                'ND': 'North Dakota',
                                                'MP': 'Northern Mariana Islands',
                                                'OH': 'Ohio',
                                                'OK': 'Oklahoma',
                                                'OR': 'Oregon',
                                                'PW': 'Palau',
                                                'PA': 'Pennsylvania',
                                                'PR': 'Puerto Rico',
                                                'RI': 'Rhode Island',
                                                'SC': 'South Carolina',
                                                'SD': 'South Dakota',
                                                'TN': 'Tennessee',
                                                'TX': 'Texas',
                                                'UT': 'Utah',
                                                'VT': 'Vermont',
                                                'VI': 'Virgin Islands',
                                                'VA': 'Virginia',
                                                'WA': 'Washington',
                                                'WV': 'West Virginia',
                                                'WI': 'Wisconsin',
                                                'WY': 'Wyoming'
                                            });

     constructor() {}

     createPropertiesModels(propertyData: any ): PropertyModel[] {
        const propertyModels: PropertyModel[] = [];
        propertyData.forEach((element) => {
            const monthlyRent = element.financial  && element.financial.monthlyRent ? element.financial.monthlyRent : 0;
            const listPrice =  element.financial && element.financial.listPrice ? element.financial.listPrice : 0;
            const address1 =   element.address.address1 ? element.address.address1 : '';
            const city =   element.address.city ?  element.address.city : '';
            const county =   element.address.county ?   element.address.county : '';
            const country =   element.address.country ?  element.address.country : '';
            const district =   element.address.district ? element.address.district : '';
            const state =   element.address.state ?  element.address.state : '';
            const yearBuilt = element.physical ? element.physical.yearBuilt : 0;
            const  propModel: PropertyModel = <PropertyModel>{};
            propModel.id = element.id;
                // address.address1
            propModel.address1 = address1.trim();
                // address.city
            propModel.city = city.trim();
                // address.county
            propModel.county = county.trim();
                // address.country
            propModel.country = country.trim();
                // address.district
            propModel.district = district.trim();
                // address.state
            propModel.state = state;
                // address.zip
            propModel.zip = element.address.zip.trim();
                // address.zipPlus4
            propModel.zipPlus4 = element.address.zipPlus4;
                // combined
            propModel.addressCombined =  address1 + ' ' + city + ' ' +
                                         county + ' ' + state + ' ' +
                                         element.address.zip + ' ' + country;
                // physical.yearBuilt
            propModel.yearBuilt = yearBuilt;
                // financial.listPrice
            propModel.listPrice =  listPrice;
                // financial.monthlyRent
            propModel.monthlyRent =  monthlyRent;
                // combined
            propModel.grossYield =  (monthlyRent * 12 / listPrice);
            propertyModels.push(propModel);
        });

        return propertyModels;
    }

    getStatesHash(): Object {
     return this.stateHash;
    }
}
