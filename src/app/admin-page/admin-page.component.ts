import { Component, OnInit } from '@angular/core';
import { AddNewBookModalComponent } from '../add-new-book-modal/add-new-book-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminBookListComponent } from '../admin-book-list/admin-book-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from "@angular/router";
import { BorrowHistoryModalComponent } from '../borrow-history-modal/borrow-history-modal.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private addBookRef: MatDialog, private bookListRef: MatDialog,private borrowHistoryRef: MatDialog, private router:Router) { }

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
        width: "1200px",
        height:"830px",
      });
  }

  showBorrowHistory():void
  {
    let dialogRef= this.borrowHistoryRef.open(BorrowHistoryModalComponent,
      {
        width: "1000px",
        height:"830px",
      });
  }


  logout()
  {
    this.router.navigate(["login"]);
    localStorage.clear();
  }


}
