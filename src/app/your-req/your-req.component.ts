import { Component, OnInit } from '@angular/core';
import { BloodBagsService } from '../servies/blood-bags.service';

@Component({
  selector: 'app-your-req',
  templateUrl: './your-req.component.html',
  styleUrls: ['./your-req.component.css']
})
export class YourReqComponent implements OnInit {
  reqests:any;

  
   ngOnInit(): void {
  
   }
  getreq(){
    this._BloodBagsService.getYourBooldReq().subscribe(
      (res)=>{
        this.reqests=res.data
        console.log(this.reqests);
        
      }
    )
    }
    constructor(private _BloodBagsService:BloodBagsService){
    this.getreq()
      
  }
}
