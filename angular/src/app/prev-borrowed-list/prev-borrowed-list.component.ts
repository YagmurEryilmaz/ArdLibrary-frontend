import { Component, OnInit } from '@angular/core';
import {Book} from '../model';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-prev-borrowed-list',
  templateUrl: './prev-borrowed-list.component.html',
  styleUrls: ['./prev-borrowed-list.component.css']
})
export class PrevBorrowedListComponent implements OnInit {
  books!: Book[]
  
  constructor(private showDetailRef: MatDialog, private api:ApiService) { }

  ngOnInit(): void {
    this.getBorrowedBooks()
  }

  getBorrowedBooks()
  {
    this.api.getBorrowedBooks().subscribe((res: any)=> {
      if(res.map((r:any)=> r.Book.ExpDate > r.Book.ExpDate + 7*((1000 * 3600 * 24))))
      {
        console.log(res);
        this.books = res.map((r : any) => r.Book);
      }
    });
  }

  openDetail(): void  {
    let dialogRef = this.showDetailRef.open(ShowDetailModalComponent, {
      width: '863px',
      height: '642px',
    });
}
}
