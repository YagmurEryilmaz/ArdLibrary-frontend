import { Component, OnInit } from '@angular/core';
import {Book} from '../model';
import { Borrow, User, BorrowDto } from '../model/models';
import{ApiService} from "../service/api.service";

@Component({
  selector: 'app-curr-borrowed-list',
  templateUrl: './curr-borrowed-list.component.html',
  styleUrls: ['./curr-borrowed-list.component.css']
})
export class CurrBorrowedListComponent implements OnInit {
  borrowedBooks!: Book[]
 
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getBorrowedBooks();
  }

  getBorrowedBooks()
  {
    this.api.getBorrowedBooks().subscribe((res: any)=> {
      console.log(res);
      this.borrowedBooks = res.map((r : any) => r.Book);
    });
  }



}
