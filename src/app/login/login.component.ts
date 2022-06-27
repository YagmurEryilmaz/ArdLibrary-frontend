import { Component, OnInit } from '@angular/core';
import { LoginDto } from "../model/models";
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';
import jwt_decode from 'jwt-decode';
import { AlertifyService } from '../service/alertify-service.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token!:any;
  tokeInfo!:any;

  constructor(private api : ApiService, private router: Router,private authService:AuthService,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    this.signIn();
    localStorage.clear();
  }
  signIn()
  {
    let loginRequest = new LoginDto();
    loginRequest.Email= (<HTMLInputElement>document.getElementById("email")).value;
    loginRequest.Password= (<HTMLInputElement>document.getElementById("password")).value;
    this.api.login(loginRequest).subscribe((res:any)=> {
      if(res)
      { 
        
        console.log(res);
        this.token =res.AccessToken;
        this.tokeInfo=this.getDecodedAccessToken(this.token);
        localStorage.setItem("token",res.AccessToken);
        localStorage.setItem("Email", this.tokeInfo.email);
        localStorage.setItem("UserId",this.tokeInfo.nameid);
        localStorage.setItem("Role",this.tokeInfo.role);
        localStorage.setItem("isLoggedIn", "1");
        if(this.tokeInfo.role == "admin")
        {
          localStorage.setItem("isAdmin", "1");
          this.router.navigate(["admin-page"]);
        }
        else{
          this.router.navigate(["home"]);
        }
      }
      else alert("User not found")
    }, (err:any)=> {
        alert("Something went wrong!!")
      }
  );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
