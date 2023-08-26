import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    "content": new FormControl(null,[Validators.maxLength(100),Validators.required,Validators.minLength(3)]),
   
    "blood_type": new FormControl(null,[Validators.maxLength(10),Validators.required,Validators.minLength(2)])
    })
    submitDonation(form:FormGroup){
   console.log(form.value);
   
    
    }
constructor(){}
ngOnInit(): void {
  
}

updateReqForm(form:FormGroup){}
}
