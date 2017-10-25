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
    updatedProperty: FormGroup;
    dataService = new DataStructureServices();
    isChecked = false;
    isReadOnly = true;
    liveInput_Class= 'un-revealed';
    stateSelected = '';
    originalProperty: PropertyModel;
    formattedGrossYield = '';
    statesAbr = this.dataService.getStatesHash();
    statesAbrKeys = Object.keys(this.statesAbr);

    constructor( private  fb: FormBuilder ) { }

     ngOnChanges(changes: SimpleChanges) {
       if (changes['property']) {
               const grossYieldConversion =  changes['property'].currentValue.grossYield > 0 ?
                                            parseFloat(changes['property'].currentValue.grossYield).toFixed(4) :
                                            0;
               this.stateSelected = changes['property'].currentValue.state;
               this.formattedGrossYield =  '% ' + grossYieldConversion;
               this.originalProperty = <PropertyModel>(Object.assign(changes['property'].currentValue));
        }
    }

   ngOnInit() {
      this.setReactiveForms(this.property);
    }

   setReactiveForms(fromModel) {
          this.updatedProperty = this.fb.group( {

          model:  this.fb.group( {
                        address1: [ fromModel.address1.trim(), [ Validators.required,
                                        Validators.minLength(5),
                                        Validators.maxLength(50),
                                        AugmentedValidators.alphaNumericWithSpaces()]],
                        city: [ fromModel.city.trim(), [ Validators.maxLength(20),
                                        AugmentedValidators.alphaWithSpaces()]],
                        county: [ fromModel.county.trim(), [ Validators.maxLength(20),
                                        AugmentedValidators.alphaWithSpaces()]],
                        country: [ fromModel.country.trim(), [    Validators.minLength(2),
                                        Validators.maxLength(20),
                                        AugmentedValidators.alphaWithSpaces()]],
                         district: [ fromModel.district.trim(), [ Validators.maxLength(15),
                                                                      AugmentedValidators.alphaWithSpaces()]],
                         zip: [fromModel.zip.toString(), [   Validators.required,
                                        Validators.minLength(5),
                                        Validators.maxLength(5),
                                        AugmentedValidators.isNumeric()]],
                        yearBuilt: [ fromModel.yearBuilt.toString(), [ Validators.minLength(1),
                                             Validators.maxLength(4),
                                             AugmentedValidators.isNumeric()]],
                         listPrice: [ fromModel.listPrice,  [ Validators.required,
                                             Validators.minLength(1),
                                             Validators.maxLength(120),
                                             AugmentedValidators.numericFloat()]],
                         monthlyRent: [ fromModel.monthlyRent, [ Validators.required,
                                             Validators.minLength(1),
                                             Validators.maxLength(7),
                                             AugmentedValidators.numericFloat()]]
                      })
        } );
    }


    stateMenuChange(value: any) {
        this.stateSelected = value;
    }


    grossYieldCompute($event) {
        this.formattedGrossYield =  '% ' + this.dataService.computeGrossYield(
                                this.updatedProperty.value.model.listPrice,
                                this.updatedProperty.value.model.monthlyRent );
    }


    turnPublishingOn() {
        this.isChecked = !this.isChecked ;
        if (this.isChecked) {
            // return to origianal state
            this.isReadOnly = false;
            this.liveInput_Class = 'do-reveal';
        } else {
            this.setReactiveForms(this.originalProperty);
            if ((this.originalProperty.monthlyRent / 1) === 0 || (this.originalProperty.listPrice / 1)  === 0 ) {
                     this.formattedGrossYield =  '% ' + 0;
            } else {
                    this.formattedGrossYield =  '% ' + this.dataService.computeGrossYield(
                                                                this.originalProperty.listPrice,
                                                                this.originalProperty.monthlyRent );
            }
            this.isReadOnly = true;
            this.liveInput_Class = 'un-revealed';
        }
    }


    onSubmit( propertyUpdate:any ) {
         const propsChanges = this.propsAreDifferent(propertyUpdate.value.model, this.originalProperty);
         if (propertyUpdate.valid && propsChanges) {
             const monthlyRentTabulate = this.dataService.buildNumberWithFixed(
                                                                         propertyUpdate.value.model.monthlyRent,
                                                                         2);
             const listPriceTabulate  = this.dataService.buildNumberWithFixed(
                                                                         propertyUpdate.value.model.listPrice,
                                                                         2);
             const updateProperty: PropertyModel = <PropertyModel>{
                                                        id: this.property.id,
                                                        address1: propertyUpdate.value.model.address1,
                                                        city: propertyUpdate.value.model.city,
                                                        country: propertyUpdate.value.model.country,
                                                        county:  propertyUpdate.value.model.county,
                                                        district: propertyUpdate.value.model.district,
                                                        state:  this.stateSelected,
                                                        zip:  propertyUpdate.value.model.zip,
                                                        zipPlus4:  propertyUpdate.value.model.zipPlus4,
                                                        addressCombined: '',
                                                        yearBuilt: parseInt(propertyUpdate.value.model.yearBuilt, 10),
                                                        listPrice: listPriceTabulate,
                                                        monthlyRent:  monthlyRentTabulate
                                                  };
              //console.log('onSubmit() emit updateProperty =', updateProperty);
              this.updatePropertyModel.emit(updateProperty);
         } else {
            this.turnPublishingOn();
         }
    }

    private propsAreDifferent( sbmtProp, orgnlProp ) {
          if ( orgnlProp.state !== this.stateSelected) {
             return true;
          }
          let result = false;
          const keySet = Object.keys(sbmtProp);
          let n = keySet.length;
          while ( n >= 0 ) {
              if (orgnlProp[keySet[n]] && sbmtProp[keySet[n]] &&
                 orgnlProp[keySet[n]].toString() !== sbmtProp[keySet[n]].toString()  ) {
                 result = true;
                 n = 0;
              }
              n--;
          }
          return result;
    }



}
