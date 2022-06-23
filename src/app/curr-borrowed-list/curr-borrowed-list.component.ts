import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Book} from '../model';
import { Borrow, User, BorrowDto, PrevBorrow, BorrowAddDto } from '../model/models';
import{ApiService} from "../service/api.service";
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';

@Component({
  selector: 'app-curr-borrowed-list',
  templateUrl: './curr-borrowed-list.component.html',
  styleUrls: ['./curr-borrowed-list.component.css']
})
export class CurrBorrowedListComponent implements OnInit {
  borrowedBooks!: Book[];
  prevBooks!:Borrow[];
  id = parseInt(localStorage['UserId']);
  todaysDate!:Date;

  constructor(private api:ApiService, private showDetailRef: MatDialog) { }

  ngOnInit(): void {
    this.getBorrowedBooksById(this.id);
  }

  getBorrowedBooksById(id:any)
  {
    this.todaysDate= new Date();
    this.api.getBorrowedBooksById(id).subscribe((res: Borrow[])=> {
        console.log(res);
        this.borrowedBooks = res.filter(r => new Date(r.ExpDate).getDate()+2 > this.todaysDate.getDate()).map((t: Borrow) => t.Book);
        //this.prevBooks=res.filter(r => new Date(r.ExpDate).getDate()+2 <this.todaysDate.getDate()).map((t: BorrowAddDto) => t);
        console.log(res.filter(r => new Date(r.ExpDate).getDate()+2 <this.todaysDate.getDate()).map((t: BorrowAddDto) => this.api.addPrevBorrowedBooks(t)))

    
    });
  }

  deleteBorrowedBook(id:any)
  {
    this.api.deleteBorrowedBook(id).subscribe((res:any)=>
    {
      alert("Borrowed book is successfully returned!!")
      window.location.reload();
    },(err:any)=> {
      alert("Something went wrong!!")
    });
  }
 
  openDetail(bookId:any):void
  {
    localStorage.setItem("bookId",bookId)

    let dialogRef= this.showDetailRef.open(ShowDetailModalComponent,
    {
      width: "890px",
      height:"auto",
    });

  }


}
