import { formatDate } from '@angular/common';
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
  dateelement!:string[];
  parsedExp!:Date[];

  constructor(private api:ApiService, private showDetailRef: MatDialog) { }

  ngOnInit(): void {
    this.getCurrBorrowedBooksById(this.id);
    this.getExpDate(this.id);
  }

  getCurrBorrowedBooksById(id:any)
  {
    this.todaysDate= new Date();
    this.api.getCurrBorrowedBooksById(id).subscribe((res: Borrow[])=> {
        console.log(res);
        this.borrowedBooks = res.map((t: Borrow) => t.Book);
       
    
    });
  }

  getExpDate(id:number){
    var dateelement: string[] = []
      this.api.getRealExpDate(id).subscribe((res:Date[])=>{
          this.parsedExp=res;
          this.parsedExp.forEach(element => {
            dateelement.push(formatDate(element, 'dd/MM/yyy','en-US'))
            this.dateelement=dateelement;
          });
      })
   
  }

  deleteBorrowedBook(id:any)
  {
    if(confirm("Are you sure to return the book?")){
    this.api.deleteBorrowedBook(id).subscribe((res:any)=>
    {
      alert("Borrowed book is successfully returned!!")
      window.location.reload();
    },(err:any)=> {
      alert("Something went wrong!!")
    });
  }
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
