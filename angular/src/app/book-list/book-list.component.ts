import { Component, OnInit } from '@angular/core';
import {Book} from "../model";
import {User} from "../model";
import{ApiService} from "../service/api.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Book[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.api.getBooks().subscribe((res: any)=> {
      this.books = res;
    });
  
  }

}
