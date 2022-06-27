import { Component, OnInit } from '@angular/core';
import { AddNewBookModalComponent } from '../add-new-book-modal/add-new-book-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminBookListComponent } from '../admin-book-list/admin-book-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private addBookRef: MatDialog, private bookListRef: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  addBook():void
  {
  
    let dialogRef= this.addBookRef.open(AddNewBookModalComponent,
    {
      width: "890px",
      height:"auto",
    });

  }

  showBookList():void
  {
    let dialogRef= this.bookListRef.open(AdminBookListComponent,
      {
        width: "auto",
        height:"700px",
      });
  }

  logout()
  {
    this.router.navigate(["login"]);
    localStorage.clear();
  }

}
