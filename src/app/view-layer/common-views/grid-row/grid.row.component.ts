import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
import { AugmentedValidators } from '../../../business-layer/validators/augmented.validator';
import { PropertyModel } from '../../../business-layer/models';
import { DataStructureServices } from '../../../business-layer/helpers/data.structures.service';



@Component({
    moduleId: module.id,
    selector: 'app-grid-row',
    templateUrl: 'grid.row.component.html',
    styleUrls: ['grid.row.component.scss']
})
export class GridRowComponent  implements OnInit, OnChanges {
    @Input()  property: PropertyModel;
    @Input()  rowUpdateState: boolean;
    @Output() updatePropertyModel = new EventEmitter<PropertyModel>();
    @Output() addRowState = new EventEmitter<boolean>();
    updatedProperty: FormGroup;
    dataService = new DataStructureServices();
    isChecked = false;
    isReadOnly = true;
    liveInput_Class= 'un-revealed';
    revealPublish_Class= 'un-revealed';
    updatedType = '';
    originalProperty: PropertyModel;
    updatableProperty: PropertyModel;
    formattedListPrice = '';
    formattedMonthlyRent = '';
    formattedGrossYield = '';
    statesAbr = this.dataService.getStatesHash();
    statesAbrKeys = Object.keys(this.statesAbr);

    constructor( private  fb: FormBuilder ) { }

     ngOnChanges(changes: SimpleChanges) {
       if (changes['property']) {
               const listPriceConversion = parseFloat(changes['property'].currentValue.listPrice);
               const monthlyRentConversion = parseFloat(changes['property'].currentValue.monthlyRent);
               const grossYieldConversion =  changes['property'].currentValue.grossYield > 0 ?
                                            parseFloat(changes['property'].currentValue.grossYield).toFixed(4) :
                                            0;
               this.formattedListPrice =  '$ ' + listPriceConversion;
               this.formattedMonthlyRent =  '$ ' + monthlyRentConversion;
               this.formattedGrossYield =  '% ' + grossYieldConversion;
               this.originalProperty = <PropertyModel>(changes['property'].currentValue);
               this.updatableProperty = <PropertyModel>(changes['property'].currentValue);
        }
    }



   ngOnInit() {
      // const listPriceConvert = parseFloat(this.property.listPrice).toFixed(2);
        this.updatedProperty = this.fb.group( {

          model:  this.fb.group( {
                        address1: [ this.property.address1.trim(), [ Validators.required,
                                        Validators.minLength(5),
                                        Validators.maxLength(30),
                                        AugmentedValidators.alphaNumericWithSpaces()]],
                        city: [ this.property.city.trim(), [ Validators.maxLength(20),
                                        AugmentedValidators.alphaWithSpaces()]],
                        county: [ this.property.county.trim(), [ Validators.maxLength(20),
                                        AugmentedValidators.alphaWithSpaces()]],
                        country: [ this.property.country.trim(), [    Validators.minLength(2),
                                        Validators.maxLength(20),
                                        AugmentedValidators.alphaWithSpaces()]],
                         district: [ this.property.district.trim(), [ Validators.maxLength(15),
                                                                      AugmentedValidators.alphaWithSpaces()]],
                         zip: [this.property.zip.toString(), [   Validators.required,
                                        Validators.minLength(5),
                                        Validators.maxLength(5),
                                        AugmentedValidators.isNumeric()]],
                        yearBuilt: [ this.property.yearBuilt.toString(), [  Validators.required,
                                             Validators.minLength(4),
                                             Validators.maxLength(4),
                                             AugmentedValidators.isNumeric()]],
                         listPrice: [ this.property.listPrice,  [ Validators.required,
                                             Validators.minLength(1),
                                             Validators.maxLength(120),
                                             AugmentedValidators.numericFloat()]],
                         monthlyRent: [ this.property.monthlyRent, [ Validators.required,
                                             Validators.minLength(1),
                                             Validators.maxLength(7),
                                             AugmentedValidators.numericFloat()]]
                      })
        } );
    }


    updatePropertyType(value) {
        this.updatedType = value;
    }


    turnPublishingOn(garmentId: number ) {
        this.isChecked = !this.isChecked ;
        if (this.isChecked) {
            this.isReadOnly = false;
            this.liveInput_Class = 'do-reveal';
        } else {
            this.isReadOnly = true;
            this.liveInput_Class = 'un-revealed';
        }
        this.updateEditRowState();
    }


    onSubmit(propertyUpdate) {
        console.log('onSubmit() propertyUpdate.valid =', propertyUpdate.valid);
         if (propertyUpdate.valid) {
             console.log('onSubmit() propertyUpdate.value.model =', propertyUpdate.value.model);
             const updateProperty: PropertyModel = <PropertyModel>{
                                                        id: this.property.id,
                                                        address1: propertyUpdate.value.model.address1,
                                                        city: propertyUpdate.value.model.city,
                                                        country: propertyUpdate.value.model.country,
                                                        county:  propertyUpdate.value.model.county,
                                                        district: propertyUpdate.value.model.district,
                                                        state:  this.updatedType ?  this.updatedType : this.property.state,
                                                        zip:  propertyUpdate.value.model.zip,
                                                        zipPlus4:  propertyUpdate.value.model.zipPlus4,
                                                        addressCombined: '',
                                                        yearBuilt: propertyUpdate.value.model.yearBuilt,
                                                        listPrice: propertyUpdate.value.model.listPrice,
                                                        monthlyRent: propertyUpdate.value.model.monthlyRent,
                                                        grossYield: 0
                                                  };
             console.log('onSubmit() emit updateProperty =', updateProperty);
              this.updatePropertyModel.emit(updateProperty);
         }
    }

    private validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
    }


     private updateEditRowState() {
        this.addRowState.emit(this.isChecked);

    }

}
