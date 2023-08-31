import { Component, OnInit } from '@angular/core';
import { BloodBagsService } from '../servies/blood-bags.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
ngOnInit(): void {
  
}
user:boolean=false
reqests:any;
usersReqests:any;
getreq(){
  this._BloodBagsService.getAllCampaigns().subscribe(
    (res)=>{
      
      this.reqests=res.data
      
    }
  )
}
getSameReq(){
    this._BloodBagsService.getSameAllBloodReq().subscribe(
      (res)=>{
        
        this.usersReqests=res.data
        
      }
    )
}
  constructor(private _BloodBagsService:BloodBagsService){
  this.getSameReq()
  this.hospitalReq()
}
 usersReq(){
  this.user=true 

 }
 hospitalReq(){
  this.user=false
  this.getreq()
 }
 getData(){
  if(this.user){
      this.getSameReq()

  }
  else{
  this.getreq()

 }
 }
 
}
