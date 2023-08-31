import { Component } from '@angular/core';
import { BloodBagsService } from '../servies/blood-bags.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent {
  reqests:any;
  getreq(){
    this._BloodBagsService.getAllEmergency().subscribe(
      (res)=>{
        console.log(res.data);
        
        this.reqests=res.data
        
      }
    )
    }
    constructor(private _BloodBagsService:BloodBagsService){
    this.getreq()
   }
}
