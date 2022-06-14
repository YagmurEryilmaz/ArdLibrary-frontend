import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.router.navigate(["login"]);
    localStorage.clear();
    this.authService.isLoggedIn= false;
  }

}
