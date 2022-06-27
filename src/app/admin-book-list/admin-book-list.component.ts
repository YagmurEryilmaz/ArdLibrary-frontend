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
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {

  public currentList!:Book[]
  books!:Book[];
  allBooks!: Book[];
  borrowData:BorrowDto=new BorrowDto();
  filter:any;
  id = parseInt(localStorage['UserId']);
  p!: any;

  constructor(private api: ApiService, private alertify:AlertifyService,private showDetailRef: MatDialog, private sharedComp: SharedDataService) {
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

  search(value: string): void {
    this.books = this.allBooks?.filter((val) => val.Title.toLowerCase().includes(value) || val.AuthorName.toLowerCase().includes(value)  || val.Genre.toLowerCase().includes(value) || val.Language.toLowerCase().includes(value) || val.PublishYear.toString().includes(value));
  }
}
