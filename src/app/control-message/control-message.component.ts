import { Component, OnInit,NgModule,Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';
@Component({
  selector: 'app-control-message',
  template: '<div *ngIf="errorMessage !== null">{{errorMessage}}</div>'
})
export class ControlMessageComponent  {

  @Input()  control:FormControl | any;
  constructor() { }

  get errorMessage():any
  {
    for (let propertyName in this.control.errors) 
    {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) 
      {
        return ValidationService.ValidationErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  } 

}
