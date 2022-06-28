import { Component, ElementRef, Inject, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Book } from '../model/models';
import{ApiService} from "../service/api.service";

@Component({
  selector: 'app-show-detail-modal',
  templateUrl: './show-detail-modal.component.html',
  styleUrls: ['./show-detail-modal.component.css']
})
export class ShowDetailModalComponent implements OnInit {
  borrowedBooks:Array<Book>=new Array<Book>();
  specificBook!:Book;
  isReadMore = false;
  lengthControl = true;
  id=parseInt( localStorage['bookId']);
  height!:string; 

  constructor(public dialogRef: MatDialogRef<ShowDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private api:ApiService) { }

    ngOnInit(): void {

      this.getBookById(this.id);
     

    }

  getBorrowedBooks()
  {
      this.api.getBorrowedBooks().subscribe((res: any)=> {
     
        this.borrowedBooks = res.map((r:any) => r.Book);

    });
    
  }
  getBookById(id:any){

    this.api.getBookById(id).subscribe((res:any)=> {
      this.specificBook=res;
      console.log(res);
      console.log(this.specificBook.Subject.length);

      this.showText()
    });
  }

  showText() {
    if(this.specificBook.Subject.length > 807){
      this.isReadMore = !this.isReadMore
      this.lengthControl = true;
    }
    else{
      this.lengthControl = false;
    }
   }

  closeModal(){

    this.dialogRef.close();

  }

  
}
