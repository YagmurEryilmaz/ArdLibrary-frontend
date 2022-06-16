import { Component, OnInit } from '@angular/core';
import {Book} from "../model";
import { Borrow, BorrowAddDto, BorrowDto } from '../model/models';
import {User} from "../model";
import{ApiService} from "../service/api.service";
import { AlertifyService } from '../service/alertify-service.service';
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Book[];
  borrowData:BorrowDto=new BorrowDto();

  constructor(private api: ApiService, private alertify:AlertifyService,private showDetailRef: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.api.getBooks().subscribe((res: any)=> {
      console.log(res);
      this.books = res;
    });
  
  }
  addBorrow(bookId:number)
  {
    console.log(bookId);
      let addBorrowDto:BorrowAddDto=
      {
          BookId : bookId,
          ExpDate: new Date(),
      }

 
    this.api.addBorrowedBooks(addBorrowDto).subscribe((res: any)=> {
      console.log(res);
      alert("Book is successfully borrowed!!")
    }, (err:any)=> {
      alert("Book is not available!!");
    });
    
  }
  openDetail(bookId:any):void
  {
    localStorage.setItem("bookId",bookId)

    let dialogRef= this.showDetailRef.open(ShowDetailModalComponent,
    {
      width: "863px",
      height:"642px",
    });

  }

}
