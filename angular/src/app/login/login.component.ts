import { Component, OnInit } from '@angular/core';
import { LoginDto } from "../model/models";
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin:any = false;

  constructor(private api : ApiService, private router: Router,) { }

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
        localStorage.setItem("token", res.AccessToken);
        localStorage.setItem("Email", res.Email);
        localStorage.setItem("UserId",res.UserId);
        this.isLogin=true; 
        localStorage.setItem("isLogin", this.isLogin) ;
        this.router.navigate(["home"]);

      }
      else{alert("User not found!!")}
    }, (err:any)=> {
        alert("Something went wrong!!")
      }
  );
  }
}
