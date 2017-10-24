import { AbstractControl } from '@angular/forms';


export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any): any {
        let config:any = {
            'required': 'Required',
            'isAlphanWhtSpc':'Only Alpha, WhiteSpaces, characters.',
            'isAlphaNumericWhtSpc':'Only Alpha, Numerical, WhiteSpaces, characters.',
            'isAlphanumeric':'Only Alpha and Numerical characters.',
            'isAlpha':'Only Alpha characters.',
            'isNumericalFloat':'Only Numerical characters and single decimal.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    static numericFloatValidator() {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        return (options?: any) => {
            return (c: AbstractControl) => {
                if (c.value === null || c.value.length === 0) {
                    return null;
                }
                let regexStr: string = '^[0-9]+([.][0-9]+)*$';
                let regex: RegExp = new RegExp(regexStr);
                //console.log('alphaNumericWithSpacesValidator c.value >>>>>=|'+c.value+'|');
                //console.log('alphaNumericWithSpacesValidator regex.test(c.value)>>>>>=',regex.test(c.value));
                if (regex.test(c.value)) {
                    //console.log('alphaNumericWithSpacesValidator NULL');
                    return null;
                }else {
                    //console.log('alphaNumericWithSpacesValidator c.value =|'+c.value+'|');
                    return { 'isNumericalFloat': true };
                }
            };
        };
    }

    static alphaWithSpacesValidator() {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
          return (options?: any) => {
           return (c: AbstractControl) => {
                     //console.log('alphaWithSpacesValidator c.value #=|'+c.value+'|');
                    // console.log('alphaWithSpacesValidator (c.value === null) #=|'+(c.value === null)+'|');
                if (c.value === null || c.value.length === 0) {
                    return null;
                }
                let regexStr: string = '^[A-Za-z ]*[A-Za-z][A-Za-z ]*$';
                let regex: RegExp = new RegExp(regexStr);
                    //console.log('alphaWithSpacesValidator c.value #=|'+c.value+'|');
                     //console.log('alphaWithSpacesValidator regex.test(c.value)#=',regex.test(c.value));
                if (regex.test(c.value)) {
                     //console.log('alphaWithSpacesValidator NULL');
                    return null;
                }else {
                    ///console.log('alphaWithSpacesValidator c.value =|'+c.value+'|');
                    return { 'isAlphanWhtSpc': true };
                }
            };
          };
    }

    static alphaNumericWithSpacesValidator() {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
          return (options?: any) => {
           return (c: AbstractControl) => {
                if (c.value === null || c.value.length === 0) {
                    return null;
                }
                let regexStr: string = '^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$';
                let regex: RegExp = new RegExp(regexStr);
                    //console.log('alphaNumericWithSpacesValidator c.value >>>>>=|'+c.value+'|');
                     //console.log('alphaNumericWithSpacesValidator regex.test(c.value)>>>>>=',regex.test(c.value));
                if (regex.test(c.value)) {
                    //console.log('alphaNumericWithSpacesValidator NULL');
                    return null;
                }else {
                    //console.log('alphaNumericWithSpacesValidator c.value =|'+c.value+'|');
                    return { 'isAlphaNumericWhtSpc': true };
                }
            };
          };
    }
}
