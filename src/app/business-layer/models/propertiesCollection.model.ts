/**
 * Created by willstreeter on 9/8/17.
 */

import { PropertyModel} from './property.model';

export interface PropertyCollectionModel {
    id:string;
    properties:PropertyModel[];
}