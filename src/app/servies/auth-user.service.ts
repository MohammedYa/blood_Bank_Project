import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private _HttpClient:HttpClient) { }
  RegisterUser(obj:any):Observable<any>{
   return  this._HttpClient.post(`http://blood.rynprogramming.com/api/auth/register`,obj)
  }
  LoginUser(obj:any):Observable<any>{
   return this._HttpClient.post(`http://blood.rynprogramming.com/api/auth/login`,obj)
  }
}
