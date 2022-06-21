import { Component, OnInit } from '@angular/core';
import {Book} from '../model';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';
import { ApiService } from '../service/api.service';
import { Borrow, BorrowAddDto, BorrowDto } from '../model/models';

@Component({
  selector: 'app-prev-borrowed-list',
  templateUrl: './prev-borrowed-list.component.html',
  styleUrls: ['./prev-borrowed-list.component.css']
})
export class PrevBorrowedListComponent implements OnInit {
  books!: Book[]| undefined
  expDate!:number[]
  id = parseInt(localStorage['UserId']);
  todaysDate!:Date;
 
  
  constructor(private showDetailRef: MatDialog, private api:ApiService) { }

  ngOnInit(): void {
    this.getPrevBorrowedBooksById(this.id)
  }
  getPrevBorrowedBooksById(id:any)
  {
    this.todaysDate= new Date();
   
    this.api.getPrevBorrowedBooksById(id).subscribe((res: Borrow[])=> {
        //deneme: res.forEach(r => console.log(new Date(r.ExpDate).getDate(), "hello", new Date(r.ExpDate).getDate()+2));
        this.books = res.filter(r => new Date(r.ExpDate).getDate()+2 < this.todaysDate.getDate()).map((t: Borrow) => t.Book);
        //this.expDate = res.map(r=> new Date(r.ExpDate).getDate());
        
    });
  }

   addBorrow(bookId:number)
  {
    console.log(bookId);
      let addBorrowDto:BorrowAddDto=
      {
          UserId: this.id,
          BookId : bookId,
          ExpDate: new Date(),
      }

 
    this.api.addBorrowedBooks(addBorrowDto).subscribe((res: any)=> {
      console.log(res);
      alert("Book is successfully Borrowed!!")
    }, (err:any)=> {
      alert("You have already borrowed this book!!");
    });
    
  }

  openDetail(bookId:any): void  {

    localStorage.setItem("bookId",bookId)
    
    let dialogRef = this.showDetailRef.open(ShowDetailModalComponent, {
    });
}
}
