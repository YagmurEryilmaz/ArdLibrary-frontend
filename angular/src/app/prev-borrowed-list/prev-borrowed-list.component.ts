import { Component, OnInit } from '@angular/core';
import {Book} from '../model';

@Component({
  selector: 'app-prev-borrowed-list',
  templateUrl: './prev-borrowed-list.component.html',
  styleUrls: ['./prev-borrowed-list.component.css']
})
export class PrevBorrowedListComponent implements OnInit {
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
