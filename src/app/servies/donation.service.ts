import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private _HttpClient:HttpClient) { }
  sendDonationReq(obj:any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/donationrequest`;

     
    return this._HttpClient.post(url, obj, { headers });
  }
  getAllDonationReq(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/donationrequest`;

     
    return this._HttpClient.get(url,{headers});
  }
  getAllYourDonationReq(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/yourdonationrequests`;

     
    return this._HttpClient.get(url,{headers});
  }
  getOneDonationReq(id:string): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/donationrequest/${id}/edit`;

     
    return this._HttpClient.get(url,{headers});
  }
  updateReq(id:string, obj: any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://blood.rynprogramming.com/api/donationrequest/${id}`;
  
    return this._HttpClient.put(url, obj, { headers });
  }

   
deleteReq(id: string): Observable<any> {
  const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value

// Create headers with the authorization token
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

// Send the DELETE request with the headers
return this._HttpClient.delete(` http://blood.rynprogramming.com/api/bloodbag/${id}`, { headers });

}
}
