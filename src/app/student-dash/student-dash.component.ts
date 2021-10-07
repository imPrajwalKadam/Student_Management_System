import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{StudentDashModel}from './studentdash.model';
import { APIService } from '../Shared/api.service';
@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent implements OnInit {
  formValue !:any;

  StudentModelsobj:StudentDashModel = new StudentDashModel();

  constructor(private formBuilder:FormBuilder,private api : APIService) {

   }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName:[''],
      lastName:[],
      Email:[],
      Mobile:[],
      Fees:[],
      Address:[],
    })
  }
   PostStudentDetails()
   {
     this.StudentModelsobj.firstName = this.formValue.value.firstName;
     this.StudentModelsobj.lastName = this.formValue.value.lastName;
     this.StudentModelsobj.email = this.formValue.value.Email;
     this.StudentModelsobj.mobile = this.formValue.value.Mobile;
     this.StudentModelsobj.fees = this.formValue.value.fees;
     this.StudentModelsobj.address = this.formValue.value.Address;


this.api.postStudent(this.StudentModelsobj).subscribe(res=>{
  console.log(res);
  alert("Student record added successfully");
  this.formValue.reset();
},
err=>{
  alert("somthing went wong !!!!" );
});

   }

}
