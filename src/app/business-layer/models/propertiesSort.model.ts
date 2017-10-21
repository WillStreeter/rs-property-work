
import { PropertyModel} from './property.model';

export interface PropertySortModel {
    //propertyCollectonModel id
    collectionId:string;
    sortType:string;
    sortBase:string;
    subSetCollection:PropertyModel[];
    properties:PropertyModel[];
}