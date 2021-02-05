import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    'Content-Type':'application/json',
    'X-Requested-With':' XMLHttpRequest',
    'Accept':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:8000/api/authUser/';

  constructor(private http: HttpClient) { }

  AddUser(data:any): Observable<any> {

    return this.http.post( this.apiUrl+'signupUser/',data,{headers:headers});

  }

  login(data:any):Observable<any>{
      return this.http.post(this.apiUrl+'loginUser/',data,{headers:headers})
  }

}