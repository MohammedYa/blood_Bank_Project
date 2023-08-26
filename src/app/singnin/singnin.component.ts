import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from'@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthInstService } from '../servies/auth-inst.service';
import { AuthUserService } from '../servies/auth-user.service';
@Component({
  selector: 'app-singnin',
  templateUrl: './singnin.component.html',
  styleUrls: ['./singnin.component.css']
})
export class SingninComponent implements OnInit {
role:string=this._ActivatedRoute.snapshot.params['role'];

  LoginUserForm:FormGroup=new FormGroup({
    
    "email": new FormControl(null,[Validators.email,Validators.required]),
   
    "password": new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern(/^[A-Za-z0-9]{8,}$/)]),
    
  })
  submitForm(form:FormGroup){
  if(this.role=="User"){
    this._AuthUserService.LoginUser(form.value).subscribe(
      (res)=>{
        localStorage.setItem("userToken",res.access_token)
        localStorage.setItem("userRole","User")
        this._AuthInstService.saveUserData()
        this._Router.navigateByUrl('/homeuser')
      }
    )
  }
  else if(this.role=="Inst"){
    this._AuthInstService.LoginInst(form.value).subscribe(
      (res)=>{
        localStorage.setItem("userToken",res.access_token)
        localStorage.setItem("userRole","Inst")
        this._AuthInstService.saveUserData()
        this._Router.navigateByUrl('/addComp')

      }
    )
  }

  }

  constructor(private _ActivatedRoute:ActivatedRoute,private _Router:Router, private _AuthInstService:AuthInstService,private _AuthUserService:AuthUserService) { }

  ngOnInit(): void {
    
  }
}
