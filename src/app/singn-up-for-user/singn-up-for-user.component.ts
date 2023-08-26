import { Component,OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from'@angular/forms'
import { AuthUserService } from '../servies/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singn-up-for-user',
  templateUrl: './singn-up-for-user.component.html',
  styleUrls: ['./singn-up-for-user.component.css']
})
export class SingnUpFOrUserComponent implements OnInit {
 error:string ='';

  rigisterUserForm:FormGroup=new FormGroup({
    "name": new FormControl(null,[Validators.maxLength(30),Validators.required,Validators.minLength(3)]),
    "phone": new FormControl(null,[Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/),Validators.required]),
    "email": new FormControl(null,[Validators.email,Validators.required]),
    "address": new FormControl(null,[Validators.maxLength(40),Validators.required,Validators.minLength(3)]),
    "password": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    "password_confirmation": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    "blood_type": new FormControl(null,[Validators.maxLength(10),Validators.required,Validators.minLength(2)])
  })
  submitForm(form:FormGroup){
console.log(form.value);

    this._AuthUserService.RegisterUser(form.value).subscribe(
      (res)=>{
        if(res.message== "User successfully registered"){
          this.error="User successfully registered"
          this._Router.navigateByUrl('/login')
        }
      },
      (err)=>{        
        this.error=err.error
      }
    )
  }
  constructor(private _AuthUserService:AuthUserService,private _Router:Router) { }
  ngOnInit(): void {
    
  }
}
