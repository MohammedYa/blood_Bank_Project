import { Injectable } from '@angular/core';
import { AuthInstService } from './auth-inst.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private _AuthInstService:AuthInstService,private _Router:Router) { }
  logOut(){
    localStorage.removeItem("userToken")
    localStorage.removeItem("userRole")
    this._AuthInstService.UserData.next(null)
    this._Router.navigateByUrl('/login')

  }
}
