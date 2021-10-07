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
  ShowAdd !: boolean;
  ShowUpdate !: boolean;

  formValue !:any;
  StudentModelsobj:StudentDashModel = new StudentDashModel();

  studentAll:any;

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
    this.getAllStudents()

  }

  ClickAddStudent()
  {
    this.formValue.reset();
    this.ShowAdd=true;
    this.ShowUpdate=false;
  }
   PostStudentDetails()
   {
     this.StudentModelsobj.firstName = this.formValue.value.firstName;
     this.StudentModelsobj.lastName = this.formValue.value.lastName;
     this.StudentModelsobj.email = this.formValue.value.Email;
     this.StudentModelsobj.mobile = this.formValue.value.Mobile;
     this.StudentModelsobj.fees = this.formValue.value.Fees;
    // this.StudentModelsobj.address = this.formValue.value.Address;

  

this.api.postStudent(this.StudentModelsobj).subscribe(res=>{
  console.log(res);
  alert("Student record added successfully");
  this.formValue.reset();
  this.getAllStudents();

},
err=>{
  alert("somthing went wong !!!!" );
});

   }

   getAllStudents()
   {
     this.api.getStudent().subscribe(res=>{
       this.studentAll = res;
     })
   }

   deleteStudent(data:any)
   {
     this.api.deleteStudent(data.id).subscribe(res=>{
       alert("records Deleted Sucessfully");
       this.getAllStudents();
     })
   }

   onEdit(data:any)
   {
    this.ShowAdd=false;
    this.ShowUpdate=true;
     this.StudentModelsobj.ID=data.id;
     this.formValue.controls['firstName'].setValue(data.firstName);
     this.formValue.controls['lastName'].setValue(data.lastName);
     this.formValue.controls['Email'].setValue(data.email);
     this.formValue.controls['Mobile'].setValue(data.mobile);
     this.formValue.controls['Fees'].setValue(data.fees);
   }
   updateStudentDetails()
     {
      this.StudentModelsobj.firstName = this.formValue.value.firstName;
      this.StudentModelsobj.lastName = this.formValue.value.lastName;
     this.StudentModelsobj.email = this.formValue.value.Email;
     this.StudentModelsobj.mobile = this.formValue.value.Mobile;
     this.StudentModelsobj.fees = this.formValue.value.Fees;

      this.api.updateStudent(this.StudentModelsobj,this.StudentModelsobj.ID).subscribe(res=>{
        alert("Record added successfully..");
        this.formValue.reset();
        this.getAllStudents();
      })
     }
     
}
