import { Component, OnInit } from '@angular/core';
import { BloodBagsService } from '../servies/blood-bags.service';

@Component({
  selector: 'app-req-inst',
  templateUrl: './req-inst.component.html',
  styleUrls: ['./req-inst.component.css']
})
export class ReqInstComponent  implements OnInit{
  ngOnInit(): void {
  
  }
  reqests:any;
  getreq(){
    this._BloodBagsService.getAllBloodREq().subscribe(
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
