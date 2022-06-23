import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book, FilterDto } from "../model/models";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private api : ApiService) { 
  }
  //genres = [...new Set(this.api.getBooks().subscribe((res:any)=> res.map((book:Book)=> book.Genre)))];
  @Output() onFilter = new EventEmitter<Book[]>();
  ngOnInit(): void {
  }

  filter()
  {
    let filterRequest = new FilterDto();
    filterRequest.AuthorName= (<HTMLInputElement>document.getElementById("authorName")).value.toLocaleLowerCase();
    console.log((<HTMLInputElement>document.getElementById("authorName")).value);
    filterRequest.Genre= (<HTMLInputElement>document.getElementById("genre")).value.toLocaleLowerCase();
    filterRequest.Language= (<HTMLInputElement>document.getElementById("language")).value.toLocaleLowerCase();
    filterRequest.PublishYear= (<HTMLInputElement>document.getElementById("publishYear")).value;
    this.api.getFilteredBooks(filterRequest).subscribe((res:any)=> {
      if(res)
      {
        console.log(res)
        this.onFilter.emit(res);
      }
    }, (err:any)=> {
      alert("Something went wrong!!")
    }
);

  }
  clear()
  {
    window.location.reload();
  }
}
