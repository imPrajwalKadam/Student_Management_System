import { Injectable } from '@angular/core';


export class ValidationService {

  static ValidationErrorMessage(validatorName: any, validatorValue?: any)
  {
    let config:any = {
      'required': 'required',
      'invalidEmailAddress': 'Invalid email address',
      'InvalidPhoneNumber' :'Invalid Phone Number',
      'minlength': `MaximumLegth length is ${validatorValue.requiredLength}`
    };
    return config[validatorName];
  }

  static emailValidator(control: any): any 
  {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) 
    {
      return null;
    }
    else
     {
      return { 'invalidEmailAddress': true };
     }
  }

  static PhoneValidation(pNo:any):any
  {

    if(pNo.value.match(/^([+]\d{2}[ ])?\d{10}$/))
    {
      return null;
    }
    else
    {
      return { 'InvalidPhoneNumber' : true };
    }
  }

  static NameValidation(uName:any)
  {
    if(uName.value.match(/^[A-Z][a-z0-9_-]{3,19}$/))
    {
      console.log("First Character is Valid")
    }
    else{
      console.log("Not Valid");
    }
  }
}
