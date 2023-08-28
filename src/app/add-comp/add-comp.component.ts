import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmergencyService } from '../servies/emergency.service';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit{
error:string=""
reqests:any
reqId:String="";
updateStatus:boolean=false;
EmergencyForm:FormGroup=new FormGroup({
"content": new FormControl(null,[Validators.maxLength(200),Validators.required,Validators.minLength(3)]),

"blood_type": new FormControl(null,[Validators.maxLength(10),Validators.required,Validators.minLength(2)])
})
submitDonation(form:FormGroup){
this._EmergencyService.sendEmmergency(form.value).subscribe(
(res)=>{
if (res.Message== "Emergency case added successfully") {
setTimeout(() => {
  this.error="Emergency case added successfully"

 }, 2000);
 setTimeout(() => {
  this.error=""

 }, 4000);
 this.EmergencyForm.reset();
}

}
)

}
getAllEmergency(){
  this._EmergencyService.getAllEmergencyReq().subscribe((res)=>{
    this.reqests=res.data
  })
}
constructor(private _EmergencyService:EmergencyService){
  this.getAllEmergency()
}
ngOnInit(): void {
  
}
update(id:string){
  this.reqId=id
      this.updateStatus=true
      let reqect:any
      this._EmergencyService.getoneEmergencyReq(id).subscribe(
        (res)=>{
     reqect=res.data
     this.EmergencyForm.controls['content'].setValue(reqect.content)
     this.EmergencyForm.controls['blood_type'].setValue(reqect.blood_type)
    
       }
      )
}
updateReqForm(form:FormGroup){
  this._EmergencyService.updateEmergencyReq(<string>this.reqId,form.value).subscribe(
    
    (res)=>{

      if(res.Message=="Emergency Case updated successfully"){
        this.EmergencyForm.reset();
        this.updateStatus=false
        this.getAllEmergency()
      }
    }
  )
}
deleteEmergency(id:string){
  this._EmergencyService.deleteEmergencyReq(id).subscribe(
    (res)=>{
      if(res.Message=="Emergency deleted successfully"){
        this.getAllEmergency()
      }
      
    }
  )
}


}

