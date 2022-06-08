import { Component, OnInit } from '@angular/core';
import {Book} from '../model';

@Component({
  selector: 'app-curr-borrowed-list',
  templateUrl: './curr-borrowed-list.component.html',
  styleUrls: ['./curr-borrowed-list.component.css']
})
export class CurrBorrowedListComponent implements OnInit {
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
