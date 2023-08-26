import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
   
    }
  constructor(){}
  ngOnInit(): void {
  }
  updateReqForm(form:FormGroup){

  }
}
