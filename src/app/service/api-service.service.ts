import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

 
  private RegiURL: string = "http://localhost:3500/api/register";
  private LoginUrl: string = "http://localhost:3500/api/login";
  constructor(private http:HttpClient, private router: Router) { }
  


  registerUser(user: any) {
    return this.http.post<any>(this.RegiURL, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this.LoginUrl, user);
  }

  getData():Observable<any> {
    return this.http.get<any>(this.LoginUrl);
  }

   
  loggedIn(){
    return !!localStorage.getItem('token'); //this always going to return either true or false.
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
