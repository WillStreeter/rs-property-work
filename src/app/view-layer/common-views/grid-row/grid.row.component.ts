import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
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
               const listPriceConversion = parseFloat(changes['property'].currentValue.listPrice).toFixed(2);
               const monthlyRentConversion = parseFloat(changes['property'].currentValue.monthlyRent).toFixed(2);
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
                         listPrice: [ this.property.listPrice.toString(),  [ Validators.required,
                                             Validators.minLength(1),
                                             Validators.maxLength(7),
                                             AugmentedValidators.isNumeric()]],
                         monthlyRent: [ this.property.monthlyRent.toString(), [ Validators.required,
                                             Validators.minLength(1),
                                             Validators.maxLength(7),
                                             AugmentedValidators.isNumeric()]]
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
         if (this.updatedProperty.valid) {
             console.log('onSubmit() this.updatedProperty.value.model =', this.updatedProperty.value.model);
             const listPriceConversion = parseFloat((this.updatedProperty.value.listPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig, ''));
             const monthlyRentConversion = parseFloat((this.updatedProperty.value.monthlyRent).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig, ''));
             const updateProperty: PropertyModel = <PropertyModel>{
                                                        id: this.property.id,
                                                        address1: this.updatedProperty.value.model.address1,
                                                        city: this.updatedProperty.value.city,
                                                        country: this.updatedProperty.value.country,
                                                        county:  this.updatedProperty.value.county,
                                                        district: this.updatedProperty.value.district,
                                                        state:  this.updatedType ?  this.updatedType : this.property.state,
                                                        zip:  this.updatedProperty.value.zip,
                                                        zipPlus4:  this.updatedProperty.value.zipPlus4,
                                                        addressCombined: '',
                                                        yearBuilt: this.updatedProperty.value.yearBuilt,
                                                        listPrice: parseFloat(listPriceConversion.toFixed(2)),
                                                        monthlyRent: parseFloat(monthlyRentConversion.toFixed(2)),
                                                        grossYield: 0,
                                                  };
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
