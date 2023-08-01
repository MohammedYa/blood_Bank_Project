import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from'@angular/forms'

@Component({
  selector: 'app-singnin',
  templateUrl: './singnin.component.html',
  styleUrls: ['./singnin.component.css']
})
export class SingninComponent implements OnInit {


  LoginUserForm:FormGroup=new FormGroup({
    
    "email": new FormControl(null,[Validators.email,Validators.required]),
   
    "Password": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    
  })
  submitForm(form:FormGroup){
  console.log(form)
  }
  constructor() { }
  ngOnInit(): void {
    
  }
}
