import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Book } from '../model';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-curr-borrowed-list',
  templateUrl: './curr-borrowed-list.component.html',
  styleUrls: ['./curr-borrowed-list.component.css']
})
export class CurrBorrowedListComponent implements OnInit{

  constructor(private showDetailRef: MatDialog) { }

  ngOnInit(): void {

  }

  books: Book[] = [
    { Title: "Pride and Prejudice", AuthorName: "Jane Austen", PublishYear: 1765, Genre: "Romantic", Language: "English", IsBorrowed: false },
    { Title: "Pride and Prejudice", AuthorName: "Jane Austen", PublishYear: 1765, Genre: "Romantic", Language: "English", IsBorrowed: false },
    { Title: "Pride and Prejudice", AuthorName: "Jane Austen", PublishYear: 1765, Genre: "Romantic", Language: "English", IsBorrowed: false },
    { Title: "Pride and Prejudice", AuthorName: "Jane Austen", PublishYear: 1765, Genre: "Romantic", Language: "English", IsBorrowed: false },

  ]

  openDetail(): void  {
    let dialogRef = this.showDetailRef.open(ShowDetailModalComponent, {
      width: '863px',
      height: '642px',
    });
}
}


