import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(private httpService: HttpClient ) {}
isAuthenticated(){
let d= localStorage.getItem("isLoggedIn");

    return d=="1";
  }
}