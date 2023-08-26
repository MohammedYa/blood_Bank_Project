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
reqests:any;
getreq(){
  this._BloodBagsService.getAllBooldReq().subscribe(
    (res)=>{
      this.reqests=res.data
      
    }
  )
  }
  constructor(private _BloodBagsService:BloodBagsService){
  this.getreq()
 }
}
