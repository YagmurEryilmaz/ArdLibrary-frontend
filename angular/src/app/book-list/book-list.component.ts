import { Component, OnInit } from '@angular/core';
import {Book} from "../model";
import {User} from "../model";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[]=[
    {Title:"Pride and Prejudice", AuthorName:"Jane Austen", PublishYear:1765, Genre:"Romantic", Language:"English", IsBorrowed:false },
    {Title:"Pride and Prejudice", AuthorName:"Jane Austen", PublishYear:1765, Genre:"Romantic", Language:"English", IsBorrowed:false },
    {Title:"Pride and Prejudice", AuthorName:"Jane Austen", PublishYear:1765, Genre:"Romantic", Language:"English", IsBorrowed:false },
    {Title:"Pride and Prejudice", AuthorName:"Jane Austen", PublishYear:1765, Genre:"Romantic", Language:"English", IsBorrowed:false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
