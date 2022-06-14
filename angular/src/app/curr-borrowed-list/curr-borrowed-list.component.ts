import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {Book} from '../model';
import { Borrow, User, BorrowDto } from '../model/models';
import{ApiService} from "../service/api.service";
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';

@Component({
  selector: 'app-curr-borrowed-list',
  templateUrl: './curr-borrowed-list.component.html',
  styleUrls: ['./curr-borrowed-list.component.css']
})
export class CurrBorrowedListComponent implements OnInit {
  borrowedBooks!: Book[]
 
  constructor(private api:ApiService, private showDetailRef: MatDialog) { }

  ngOnInit(): void {
    this.getBorrowedBooks();
  }

  getBorrowedBooks()
  {
    this.api.getBorrowedBooks().subscribe((res: any)=> {
      if(res.map((r:any)=> r.Book.ExpDate < r.Book.ExpDate + 7))
      {
        console.log(res);
        this.borrowedBooks = res.map((r : any) => r.Book);
      }
    });
  }
  openDetail():void
  {
    let dialogRef= this.showDetailRef.open(ShowDetailModalComponent,
    {
      width: "863px",
      height:"642px",
    });
  }
}



