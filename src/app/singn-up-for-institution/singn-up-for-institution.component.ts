import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from'@angular/forms'

@Component({
  selector: 'app-singn-up-for-institution',
  templateUrl: './singn-up-for-institution.component.html',
  styleUrls: ['./singn-up-for-institution.component.css']
})
export class SingnUpFOrInstitutionComponent implements OnInit {


  rigisterInstitutionForm:FormGroup=new FormGroup({
    "Name": new FormControl(null,[Validators.maxLength(30),Validators.required,Validators.minLength(3)]),
    "phone": new FormControl(null,[Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/),Validators.required]),
    "email": new FormControl(null,[Validators.email,Validators.required]),
    "Address": new FormControl(null,[Validators.maxLength(40),Validators.required,Validators.minLength(3)]),
    "Password": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    "Confirm_Password": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    "Hospital-key": new FormControl(null,[Validators.maxLength(10),Validators.required,Validators.minLength(3)])
  })
  submitForm(form:FormGroup){
  console.log(form)
  }
  constructor() { }
  ngOnInit(): void {
    
  }
}

