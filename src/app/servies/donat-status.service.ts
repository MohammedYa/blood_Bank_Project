import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonatStatusService {

  constructor(private _HttpClient:HttpClient) { }
  sendDonationDate(obj:any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/donationdate`;

     
    return this._HttpClient.post(url, obj, { headers });
  }
  getAllDonationDate(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/donationdate`;

     
    return this._HttpClient.get(url,{headers});
  }
 
  getoneDonationDate(id:string): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/donationdate/${id}/edit`;

     
    return this._HttpClient.get(url,{headers});
  }
  
  updateDonationDate(id:string, obj: any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://blood.rynprogramming.com/api/donationdate/${id} `;
  
    return this._HttpClient.put(url, obj, { headers });
  }
  
  deleteDonationDate(id: string): Observable<any> {
 const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
  // Create headers with the authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  // Send the DELETE request with the headers
  return this._HttpClient.delete(`http://blood.rynprogramming.com/api/donationdate/${id}`, { headers });
  
  }
}


