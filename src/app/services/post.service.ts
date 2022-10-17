import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://633132783ea4956cfb589491.mockapi.io/movies';
  private udataURL='https://633132783ea4956cfb589491.mockapi.io/userinfo';
  constructor(private httpClient: HttpClient,private router:Router) { }
  

  getPosts():Observable<object>{
    return this.httpClient.get(this.url);
    
  }

  getData(id:number):Observable<object>{
    return this.httpClient.get(this.url+"/"+id);
  }
  update(data:any,id:string,n:number):Observable<any>{
    data.tickets=data.tickets-n
    return this.httpClient.put((this.url+"/"+id),data);
  }
  updateCancellation(data:any,id:string):Observable<any>{
    return this.httpClient.put((this.url+"/"+id),data);
  }
  storeUserData(data:any){
    this.httpClient.post<any>((this.udataURL),data).subscribe() 
  }
  getUserData(){
    return this.httpClient.get(this.udataURL);
  }
  getEditable(id:number){
    return this.httpClient.get(this.udataURL+"/"+id);
  }
  updateUserData(data:any,id:string):Observable<any>{
    return this.httpClient.put((this.udataURL+"/"+id),data);
  }
  cancelBooking(id:string){
    return this.httpClient.delete(this.udataURL+"/"+id)
  }
  
}