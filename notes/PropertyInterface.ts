import {AddressI} from "./data.model.interface";
/**
 * Created by williestreeter on 10/20/17.
 */
export interface PropertyI {
    id:string;
    address:AddressI;
    yearBuilt:string;
    listPrice:number;
    monthlyRent:number;
    grossYield:number;
}
