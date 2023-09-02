import { Component, OnInit } from '@angular/core';
import { BloodBagsService } from '../servies/blood-bags.service';

@Component({
  selector: 'app-req-inst',
  templateUrl: './req-inst.component.html',
  styleUrls: ['./req-inst.component.css']
})
export class ReqInstComponent  implements OnInit{
  user: boolean=false;
  
  reqests:any;
  usersReqests:any;
  usersReq(){
    this.user=true 
  
  }
 
  getreq(){
    this._BloodBagsService.getAllBloodREq().subscribe(
      (res)=>{
        this.reqests=res.data
        console.log(this.reqests);
        
      }
    )
  }
  getSameReq(){
    this._BloodBagsService.getAllBlood().subscribe(
      (res)=>{
        
        this.usersReqests=res.data
        
      }
    )
}
  hospitalReq(){
    this.user=false
    this.getreq()
  }
  constructor(private _BloodBagsService:BloodBagsService){
    this.getSameReq()
    this.hospitalReq()
  }
  ngOnInit(): void {
  
  }  
}
