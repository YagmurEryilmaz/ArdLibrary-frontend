import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Borrow } from '../model/models';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-borrow-history-modal',
  templateUrl: './borrow-history-modal.component.html',
  styleUrls: ['./borrow-history-modal.component.css']
})
export class BorrowHistoryModalComponent implements OnInit {
  borrowList!:Borrow[]
  dateelement!:string[];
  parsedExp!:Date[];
  todaysDate!:string;
  p!: any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getBorrowedBooks()
  }

  getBorrowedBooks()
  {
    var dateelement: string[] = []
    this.todaysDate = formatDate(new Date, 'dd/MM/yyy','en-US')
    this.api.getBorrowedBooks().subscribe((res:any)=> {
      this.borrowList=res;
      this.borrowList.forEach(element => {
        dateelement.push(formatDate(element.ExpDate, 'dd/MM/yyy','en-US'))
        this.dateelement=dateelement;
      });
    })
  }

  
}
