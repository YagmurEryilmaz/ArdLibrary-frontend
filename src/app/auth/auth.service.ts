import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor() { }
isAuthenticated(){
let d= localStorage.getItem("isLoggedIn");

    return d=="1";
  }
}