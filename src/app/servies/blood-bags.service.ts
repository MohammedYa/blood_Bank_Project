import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodBagsService {
  constructor(private _HttpClient:HttpClient) { }

  sendBloodReq(obj:any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/bloodbag`;

     
    return this._HttpClient.post(url, obj, { headers });
  }
  getAllCampaigns(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/allcampaigns`;

     
    return this._HttpClient.get(url,{headers});
  }
  getAllBloodREq(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/allbloodrequests`;

     
    return this._HttpClient.get(url,{headers});
  }
  getYourBooldReq(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/yourbloodrequests`;

     
    return this._HttpClient.get(url,{headers});
  }
  getoneBooldReq(id:string): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/bloodbag/${id}/edit`;

     
    return this._HttpClient.get(url,{headers});
  }
  
  updateReq(id:string, obj: any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = ` http://blood.rynprogramming.com/api/bloodbag/${id}`;
  
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
  getAllEmergency(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/allemergencies`;

     
    return this._HttpClient.get(url,{headers});
  }
  getSameAllBloodReq(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/requestsamebloodtype`;

     
    return this._HttpClient.get(url,{headers});
  }
}
