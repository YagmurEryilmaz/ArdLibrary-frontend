import { Component, Inject, OnInit } from '@angular/core';
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
  
  specificBook!: Book;
  id =parseInt( localStorage['bookId']);

  

  constructor(public dialogRef: MatDialogRef<ShowDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private api:ApiService) { }

    ngOnInit(): void {

      this.getBookById(this.id);
      console.log(this.id);
    }

  getBorrowedBooks()
  {
      this.api.getBorrowedBooks().subscribe((res: any)=> {
     
        this.borrowedBooks = res.map((r:any) => r.Book);

    });
  }
  getBookById(id:number){
  
    this.api.getBookById(id).subscribe((res:any)=> {

      this.specificBook  = res;
      
    })
    
  }

  closeModal(){

    this.dialogRef.close();

  }
}


