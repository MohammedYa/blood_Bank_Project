import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaignsService {
  constructor(private _HttpClient:HttpClient) { }

  sendCompaigns(obj:any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/hospital/campaign`;

     
    return this._HttpClient.post(url, obj, { headers });
  }
  getAllCompaignsReq(): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/hospital/campaign`;

     
    return this._HttpClient.get(url,{headers});
  }
 
  getoneCompaignsReq(id:string): Observable<any>{
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url =`http://blood.rynprogramming.com/api/hospital/campaign/${id}/edit`;

     
    return this._HttpClient.get(url,{headers});
  }
  
  updateCompaignsReq(id:string, obj: any): Observable<any> {
    const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://blood.rynprogramming.com/api/hospital/campaign/${id} `;
  
    return this._HttpClient.put(url, obj, { headers });
  }
  
  deleteCompaignsReq(id: string): Observable<any> {
 const token = localStorage.getItem("userToken"); // Replace 'your_token' with the actual token value
  // Create headers with the authorization token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  // Send the DELETE request with the headers
  return this._HttpClient.delete(`http://blood.rynprogramming.com/api/hospital/campaign/${id}`, { headers });
  
  }}
