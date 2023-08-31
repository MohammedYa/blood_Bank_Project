import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompaignsService } from '../servies/compaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit{
  
error:string=""
reqests:any
reqId:String="";
updateStatus:boolean=false;
 campaigns:FormGroup=new FormGroup({
    "address": new FormControl(null,[Validators.maxLength(40),Validators.required,Validators.minLength(3)]),
    "date": new FormControl(null,[Validators.required]),
    "name": new FormControl(null,[Validators.maxLength(20),Validators.required,Validators.minLength(2)])
    })
    submitDonation(form:FormGroup){
   console.log(form.value);
   this._CompaignsService.sendCompaigns(form.value).subscribe(
    (res)=>{
    console.log(res);
    if(res.Message== "Campaign created successfully"){
      setTimeout(() => {
        this.error= "Campaign created successfully"
      
        }, 2000);
        setTimeout(() => {
        this.error=""
      
        }, 4000);
      this.campaigns.reset()
    }
    },
    (err)=>{
    if(err.Message= "Can't create campaign now , try later"){
    setTimeout(() => {
      this.error= "Can't create campaign now , try later"      
      }, 2000);
      setTimeout(() => {
      this.error=""

      }, 4000);
      this.campaigns.reset()

    }
    }
   )
    }
    getAllcompagin(){
      this._CompaignsService.getAllCompaignsReq().subscribe((res)=>{
        this.reqests=res.data
      })
    }
  constructor(private _CompaignsService:CompaignsService){}
  ngOnInit(): void {
  }
  update(id:string){
    this.reqId=id
        this.updateStatus=true
        let reqect:any
        this._CompaignsService.getoneCompaignsReq(id).subscribe(
          (res)=>{
       reqect=res.data
       this.campaigns.controls['name'].setValue(reqect.name)
       this.campaigns.controls['date'].setValue(reqect.date)
       this.campaigns.controls['address'].setValue(reqect.address)
      
         }
        )
  }
  updateReqForm(form:FormGroup){
    this._CompaignsService.updateCompaignsReq(<string>this.reqId,form.value).subscribe(
      
      (res)=>{
  
        if(res.Message==""){
          this.campaigns.reset();
          this.updateStatus=false
          this.getAllcompagin()
        }
      }
    )
  }
  deleteCompagin(id:string){
    this._CompaignsService.deleteCompaignsReq(id).subscribe(
      (res)=>{
        if(res.Message==""){
          this.getAllcompagin()
        }
        
      }
    )
  }
 
}
