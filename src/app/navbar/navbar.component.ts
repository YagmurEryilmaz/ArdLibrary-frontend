import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';
import{Book} from '../model'
import {SharedDataService} from '../service/SharedDataService';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  book!: Book[];
  allBooks!:Book[];
  filter:any;

  constructor(private router: Router, private authService:AuthService, private sharedComp: SharedDataService) { }

  ngOnInit(): void {
  }


  logout()
  {
    this.router.navigate(["login"]);
    localStorage.clear();
  }

  filterEvent()
  {
    this.sharedComp.changeMessage(this.filter);
  }

}
