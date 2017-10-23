/**
 * Created by willstreeter on 9/19/17.
 */
import { PropertyModel } from '../../../business-layer/models/index';


export class Property {

    id: number;
    addressCombined: string;
    address1: string;
    city: string;
    country: string;
    county: string;
    district: string;
    state: string;
    zip: string;
    zipPlus4: string;
    yearBuilt: string;
    listPrice: number;
    monthlyRent: number;
    grossYield: number;

	constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}