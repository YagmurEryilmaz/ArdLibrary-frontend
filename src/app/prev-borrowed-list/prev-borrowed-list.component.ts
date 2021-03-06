import { Component, OnInit } from '@angular/core';
import {Book} from '../model';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';
import { ApiService } from '../service/api.service';
import { Borrow, BorrowAddDto, BorrowDto } from '../model/models';
import { SharedDataService } from '../service/SharedDataService';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-prev-borrowed-list',
  templateUrl: './prev-borrowed-list.component.html',
  styleUrls: ['./prev-borrowed-list.component.css']
})
export class PrevBorrowedListComponent implements OnInit {
  books!: Borrow[] | undefined
  allBooks!: Borrow[];
  expDate!:number[]
  parsedExp!:Date[];
  dateelement!:string[];
  id = parseInt(localStorage['UserId']);
  todaysDate!:Date;
  filter:any;
  
 
  
  constructor(private showDetailRef: MatDialog, private api:ApiService,private sharedComp:SharedDataService) {
    sharedComp.currentMessage.subscribe((res:string)=> {
      this.filter = res;
      this.search(res);
    })
   }

  ngOnInit(): void {
    this.getBorrowedBooksById(this.id)
    this.getBorrowDate(this.id);

  }
  getBorrowedBooksById(id:any)
  {
    this.todaysDate= new Date();
    
    
    this.api.getPrevBorrowedBooksById(id).subscribe((res: Borrow[])=> {
        this.books =res;
        this.allBooks =res;  
    });
  }

  getBorrowDate(id:number){
    var dateelement: string[] = []
      this.api.getBorrowDate(id).subscribe((res:Date[])=>{
          this.parsedExp=res;
          this.parsedExp.forEach(element => {
            dateelement.push(formatDate(element, 'dd/MM/yyy','en-US'))
            console.log("date",dateelement);
            this.dateelement=dateelement;
          });
      })
   
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
      window.location.reload();
    }, (err:any)=> {
      alert("You have already borrowed this book!!");
    });
    
  }
  
search(value: string): void {
  this.books = this.allBooks?.filter((val) => val.Book.Title.toLowerCase().includes(value) ||??val.Book.AuthorName.toLowerCase().includes(value));
}
}
