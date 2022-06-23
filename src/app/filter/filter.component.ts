import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book, FilterDto } from "../model/models";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genres: any[] = [];
  languages:any[]=[];

  constructor(private api : ApiService) {}
  
  @Output() onFilter = new EventEmitter<Book[]>();
  ngOnInit(): void {
    this.getGenres();
    this.getLanguages();
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
  getGenres()
  {
    this.api.getBooks().subscribe((res:any)=>{
      this.genres = [...new Set(res.map((t: Book) => t.Genre))];
        console.log("hiiiiii",this.genres)
    });
  }
  getLanguages()
  {
    this.api.getBooks().subscribe((res:any)=>{
      this.languages = [...new Set(res.map((t: Book) => t.Language))];
        console.log("hiiiiii",this.languages)
    });
  }
}
