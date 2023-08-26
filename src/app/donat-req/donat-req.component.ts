import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DonationService } from '../servies/donation.service';

@Component({
  selector: 'app-donat-req',
  templateUrl: './donat-req.component.html',
  styleUrls: ['./donat-req.component.css']
})
export class DonatReqComponent {
  error:string=""
  reqests:any
  reqId:String="";
  updateStatus:boolean=false;

  AddDonation:FormGroup=new FormGroup({
  "content": new FormControl(null,[Validators.maxLength(200),Validators.required,Validators.minLength(3)]),
})
  submitDonation(form:FormGroup){
    console.log(form.value);
    
  this._DonationService.sendDonationReq(form.value).subscribe(
    (res)=>{
      console.log(res)
      if(res.Message=="Your last request isn't approved yet"){
        setTimeout(() => {
         this.error="Your last request isn't approved yet"

        }, 2000);
        this.AddDonation.reset();
      }
      else{
        setTimeout(()=>{
        this.error="Donation request created successfully"

        },2000)
        this.AddDonation.reset();
      }
      
    },
    (err)=>{
      console.log(err);
      
    }
  )
  }
  getreq(){
  this._DonationService.getAllYourDonationReq().subscribe(
    (res)=>{
      this.reqests=res.data
      console.log(this.reqests);
      
    }
  )
  }
    constructor(private _DonationService :DonationService){
  this.getreq()
    }
    update(id:string){
      this.reqId=id
      this.updateStatus=true
      let reqect:any
      this._DonationService.getOneDonationReq(id).subscribe(
        (res)=>{
     reqect=res.data
     this.AddDonation.controls['content'].setValue(reqect.content)
    
       }
      )
     
    }
    updateReqForm(upform:FormGroup){
      this._DonationService.updateReq(<string>this.reqId,upform.value).subscribe(
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
      this._DonationService.deleteReq(id).subscribe(
        (res)=>{
          console.log(res);
          if(res.Message=="Request data deleted successfully"){
            this.getreq()
          }
          
        }
      )
    }
















}
