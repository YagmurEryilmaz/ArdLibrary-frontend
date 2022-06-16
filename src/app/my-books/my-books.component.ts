import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";
import { SharedDataService } from '../service/SharedDataService';

@Component({
  selector: 'my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
   filter:any;

  constructor( private api: ApiService, private sharedComp:SharedDataService) { 
    sharedComp.currentMessage.subscribe((res:any)=> {
      this.filter = res;
    })
  }

  ngOnInit(): void {
    this.api.getBooks();
  }


}
