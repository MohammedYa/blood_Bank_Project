import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInstService {
  UserData=new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient) { 
    if(localStorage.getItem('userToken')!=null){
      this.saveUserData( )
    }
  }
  RegisterInst(obj:any):Observable<any>{
  return  this._HttpClient.post(`http://blood.rynprogramming.com/api/hospital/auth/register`,obj)
  }
  LoginInst(obj:any):Observable<any>{
   return this._HttpClient.post(`http://blood.rynprogramming.com/api/hospital/auth/login`,obj)
  }
  saveUserData(){
   let encodedToken=localStorage.getItem("userToken")
   let decodedToken:any=jwtDecode(<string>encodedToken)
   this.UserData.next(decodedToken)   
   
  }
}
