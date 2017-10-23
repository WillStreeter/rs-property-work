import { Component,Input, Output, EventEmitter, OnChanges, SimpleChanges, } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { PropertyModel } from '../../../business-layer/models';



@Component({
    moduleId: module.id,
    selector: 'grid-row',
    templateUrl: 'grid.row.component.html',
    styleUrls: ['grid.row.component.scss']
})
export class GridRowComponent  implements OnChanges{
    @Input()  property: PropertyModel;
    @Input()  rowUpdateState: boolean;
    @Output() updatePropertyModel = new EventEmitter<PropertyModel>();
    @Output() addRowState = new EventEmitter<boolean>();
    isChecked:boolean = false;
    isReadOnly:boolean = true;
    liveInput_Class='noStyle';
    revealPublish_Class='un-revealed';
    updatedType:string ='';
    originalProperty:PropertyModel;
    formattedListPrice: string = '';
    formattedMonthlyRent: string = '';
    formattedGrossYield: string = '';

     ngOnChanges(changes: SimpleChanges) {
       if(changes['property']){
               const listPriceConversion= parseFloat(changes['property'].currentValue.listPrice).toFixed(2);
               const monthlyRentConversion= parseFloat(changes['property'].currentValue.monthlyRent).toFixed(2);
               const grossYieldConversion= parseFloat(changes['property'].currentValue.grossYield).toFixed(2);
               this.formattedListPrice =  '$'+ listPriceConversion;
               this.formattedMonthlyRent =  '$'+ monthlyRentConversion;
               this.formattedGrossYield =  '$'+ grossYieldConversion;
               this.originalProperty = <PropertyModel>{
                                                          id: changes['property'].currentValue.id,
                                                          address:changes['property'].currentValue.address,
                                                          yearBuilt: changes['property'].currentValue.yearBuilt,
                                                          listPrice:changes['property'].currentValue.listPrice,
                                                          monthlyRent:changes['property'].currentValue.monthlyRent,
                                                          grossYield:changes['property'].currentValue.grossYield
                                                    };
       }
    }

    updatePropertyType(value){
        this.updatedType = value;
    }


    turnPublishingOn(garmentId:number){
        this.isChecked = !this.isChecked ;
        if(this.isChecked){
            this.isReadOnly = false;
            this.liveInput_Class = 'input-on';
            this.revealPublish_Class='do-reveal';
        }else{
            this.isReadOnly = true;
            this.liveInput_Class = 'noStyle';
            this.revealPublish_Class='un-revealed';
        }
        this.updateEditRowState();
    };

    publishPropertyUpdate(f: NgForm){
        this.isReadOnly = true;
        this.isChecked= false;
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class='un-revealed';
        this.formattedListPrice = '$'+(f.value.listPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig,'');
        this.formattedMonthlyRent = '$'+(f.value.monthlyRent).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig,'');
        this.formattedGrossYield = '$'+(f.value.grossYield).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig,'');
        const listPriceConversion= parseFloat((f.value.listPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig,''));
        const monthlyRentConversion= parseFloat((f.value.monthlyRent).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig,''));
        let updateProperty:PropertyModel = <PropertyModel>{
                                                      id:this.property.id,
                                                      address:f.value.address,
                                                      yearBuilt: f.value.yearBuilt,
                                                      listPrice: parseFloat(listPriceConversion.toFixed(2)),
                                                      monthlyRent: parseFloat(monthlyRentConversion.toFixed(2)),
                                                      grossYield:parseInt(f.value.grossYield)
                                                  };
        this.updatePropertyModel.emit(updateProperty)

    }

    private updateEditRowState(){
        this.addRowState.emit(this.isChecked)

    }

}
