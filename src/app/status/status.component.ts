import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DonatStatusService } from '../servies/donat-status.service';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  error: string = ""
  reqests: any
  reqId: String = "";
  updateStatus: boolean = false;
  DonationDateForm: FormGroup = new FormGroup({
    "date": new FormControl(null, [Validators.required]),
  })
  submitDonation(form: FormGroup) {
    let Date = form.value.date
    let day = Date.slice(0, 9);
    let hour = Date.slice(11, 18);
    let obj = {
      date: `${day} ${hour}:00 `
    }

    this._DonatStatusService.sendDonationDate(obj).subscribe(
      (res) => {
        console.log(res);
        
        if (res.Message == "Donation date added successfully") {
          setTimeout(() => {
            this.error = "Donation date added successfully"

          }, 2000);
          setTimeout(() => {
            this.error = ""

          }, 4000);
          this.DonationDateForm.reset()
        }
      }
    )
  }
  getAllDonationDate(){
    this._DonatStatusService.getAllDonationDate().subscribe((res)=>{

      this.reqests=res.data

    })
  }
  constructor(private _DonatStatusService:DonatStatusService) {
    this.getAllDonationDate()
  }
  ngOnInit(): void {
  }
  update(id:string){
    this.reqId=id
        this.updateStatus=true
        let reqect:any
        this._DonatStatusService.getoneDonationDate(id).subscribe(
          (res)=>{

       reqect=res.data
       this.DonationDateForm.controls['date'].setValue(reqect.date)

         }
        )
  }
  updateReqForm(form:FormGroup){
    let Date = form.value.date
    let day = Date.slice(0, 10);
    let hour = Date.slice(12, 18);
    let obj = {
      date: `${day} ${hour}:00 `
    }
    
    this._DonatStatusService.updateDonationDate(<string>this.reqId,obj).subscribe(

      (res)=>{
  
        if(res.Message=="Donation date updated successfully"){
          this.DonationDateForm.reset();
          this.updateStatus=false
          this.getAllDonationDate()
          setTimeout(() => {
            this.error= "Donation Date  updated successfully"

            }, 2000);
            setTimeout(() => {
            this.error=""

            }, 4000);
        }
      }
    )
  }
  deleteDonationDate(id:string){
    
    this._DonatStatusService.deleteDonationDate(id).subscribe(
      (res)=>{
        
        if(res.Message=="Donation date deleted successfully"){
          this.getAllDonationDate()
        }

      }
    )
  }
}  
