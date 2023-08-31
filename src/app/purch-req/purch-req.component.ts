import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BloodBagsService } from '../servies/blood-bags.service';

@Component({
  selector: 'app-purch-req',
  templateUrl: './purch-req.component.html',
  styleUrls: ['./purch-req.component.css']
})
export class PurchReqComponent {
error:string=""
reqests:any
reqId:String="";

updateStatus:boolean=false;
AddDonation:FormGroup=new FormGroup({
"content": new FormControl(null,[Validators.maxLength(100),Validators.required,Validators.minLength(3)]),
"phone": new FormControl(null,[Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/),Validators.required]),
"address": new FormControl(null,[Validators.maxLength(40),Validators.required,Validators.minLength(3)]),
"bag_num": new FormControl(null,[Validators.min(1),Validators.required,Validators.max(10)]),
"blood_type": new FormControl(null,[Validators.maxLength(10),Validators.required,Validators.minLength(2)])
})
submitDonation(form:FormGroup){
this._BloodBagsService.sendBloodReq(form.value).subscribe(
  (res)=>{
    console.log(res)
    if(res.Message=="Blood bags request created successfully"){
      this.error="Blood bags request created successfully"
      this.AddDonation.reset();
    }
    
  },
  (err)=>{
    console.log(err);
    
  }
)
}
getreq(){
this._BloodBagsService.getYourBooldReq().subscribe(
  (res)=>{
    
    this.reqests=res.data
    
  }
)
}
  constructor(private _BloodBagsService:BloodBagsService){
this.getreq()
  }
 
  update(id:string){
    this.reqId=id
    this.updateStatus=true
    let reqect:any
    this._BloodBagsService.getoneBooldReq(id).subscribe(
      (res)=>{
   reqect=res.data
   this.AddDonation.controls['content'].setValue(reqect.content)
   this.AddDonation.controls['phone'].setValue(reqect.phone)
   this.AddDonation.controls['address'].setValue(reqect.address)
   this.AddDonation.controls['bag_num'].setValue(reqect.bag_num)
   this.AddDonation.controls['blood_type'].setValue(reqect.blood_type)
     }
    )
   
  }
  updateReqForm(upform:FormGroup){
    this._BloodBagsService.updateReq(<string>this.reqId,upform.value).subscribe(
      (res)=>{
        if(res.Message=="Request data updated successfully"){
          this.AddDonation.reset();
          this.updateStatus=false
          this.getreq()
        }
      }
    )
     
    
  }


  deleteReq(id:string){
    this._BloodBagsService.deleteReq(id).subscribe(
      (res)=>{
        if(res.Message=="Request data deleted successfully"){
          this.getreq()
        }
        
      }
    )
  }
}