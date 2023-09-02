import { Component, OnInit } from '@angular/core';
import { AuthInstService } from '../servies/auth-inst.service';
import { LogoutService } from '../servies/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser:boolean=true;
  role=localStorage.getItem("userRole")
  isLogin:boolean=false
  constructor(private _AuthInstService:AuthInstService ,private _LogoutService:LogoutService){
  }
  ngOnInit(): void {
    this._AuthInstService.UserData.subscribe(
      ()=>{
        if(this._AuthInstService.UserData.getValue()!=null){
          this.isLogin=true
        }
        else{
          this.isLogin=false
        }
      }
    )
     if(this.role=="User"){
      this.isUser=true
     }
     else{
      this.isUser=false
     }
  }
  logOut(){
    this._LogoutService.logOut()
  }

}
