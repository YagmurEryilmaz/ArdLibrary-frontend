import { Component, OnInit } from '@angular/core';
import {Book} from "../model";
import { Borrow, BorrowAddDto, BorrowDto } from '../model/models';
import {User} from "../model";
import{ApiService} from "../service/api.service";
import { AlertifyService } from '../service/alertify-service.service';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Book[];
  borrowData:BorrowDto=new BorrowDto();

  constructor(private api: ApiService, private alertify:AlertifyService) { }

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
    }, (err:any)=> {
      alert("Book is already borrowed!!");
    });
    
  }

}
