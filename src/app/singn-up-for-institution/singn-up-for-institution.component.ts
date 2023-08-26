import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from'@angular/forms'
import { AuthInstService } from '../servies/auth-inst.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singn-up-for-institution',
  templateUrl: './singn-up-for-institution.component.html',
  styleUrls: ['./singn-up-for-institution.component.css']
})
export class SingnUpFOrInstitutionComponent implements OnInit {


  rigisterInstitutionForm:FormGroup=new FormGroup({
    "name": new FormControl(null,[Validators.maxLength(30),Validators.required,Validators.minLength(3)]),
    "phone": new FormControl(null,[Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/),Validators.required]),
    "email": new FormControl(null,[Validators.email,Validators.required]),
    "address": new FormControl(null,[Validators.maxLength(40),Validators.required,Validators.minLength(3)]),
    "password": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    "password_confirmation": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    "Hospital-key": new FormControl(null,[Validators.maxLength(10),Validators.required,Validators.minLength(3)])
  })
  error: string='';
  submitForm(form:FormGroup){
    this._AuthInstService.RegisterInst(form.value).subscribe(
      (res)=>{
        if(res.message== "Hospital user successfully registered"){
          this.error= "Hospital user successfully registered"
          this._Router.navigateByUrl('/login')
        }
      },
      (err)=>{this.error=err.error }
 ) 
}
  constructor(private _AuthInstService:AuthInstService,private _Router:Router) { }
  ngOnInit(): void {
    
  }
}

