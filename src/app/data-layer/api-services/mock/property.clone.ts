/**
 * Created by willstreeter on 9/19/17.
 */
import { PropertyModel } from '../../../business-layer/models/index';


export class Property {

    id:number;
    name:string;
    type:string;
    price:number;
    inventory:number;
    thumbnail:string;

	constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}