import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {Book} from "../model";
import { Borrow, BorrowAddDto, BorrowDto } from '../model/models';
import {User} from "../model";
import{ApiService} from "../service/api.service";
import { AlertifyService } from '../service/alertify-service.service';
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {SharedDataService} from '../service/SharedDataService';
import {FilterComponent} from '../filter/filter.component';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  public currentList!:Book[]
  books!:Book[];
  allBooks!: Book[];
  borrowData:BorrowDto=new BorrowDto();
  filter:any;
  id = parseInt(localStorage['UserId']);
  p!: any;
 

  constructor(private api: ApiService, private alertify:AlertifyService,private showDetailRef: MatDialog, private sharedComp: SharedDataService ) { 
    sharedComp.currentMessage.subscribe((res:string)=> {
      this.filter = res;
      this.search(res.toString().toLocaleLowerCase());
    })
  }
  
  filteredList(currentList:Book[])
   {
     this.currentList=currentList;
     this.books=currentList;
   }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.api.getBooks().subscribe((res: any)=> {
      console.log(res);
      this.books = res;
      this.allBooks =res;
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
      alert("Book is successfully borrowed!!")
      window.location.reload();
    }, (err:any)=> {
      alert("You cannot borrow more than 5 books!!");
    });
    
  }
  openDetail(bookId:any):void
  {
    localStorage.setItem("bookId",bookId)

    let dialogRef= this.showDetailRef.open(ShowDetailModalComponent,
    {
      width: "863px",
      height:"642px",
    });

  }
  search(value: string): void {
    this.books = this.allBooks?.filter((val) => val.Title.toLowerCase().includes(value) || val.AuthorName.toLowerCase().includes(value)  || val.Genre.toLowerCase().includes(value) || val.Language.toLowerCase().includes(value) || val.PublishYear.toString().includes(value));
  }
}
 