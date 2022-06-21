import { Component, OnInit } from '@angular/core';
import { FilterDto } from "../model/models";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private api : ApiService) { 
  }

  ngOnInit(): void {
  }

  filter()
  {
    let filterRequest = new FilterDto();
    filterRequest.AuthorName= (<HTMLInputElement>document.getElementById("authorName")).value;
    filterRequest.Genre= (<HTMLSelectElement>document.getElementById("genre")).value;
    filterRequest.Language= (<HTMLSelectElement>document.getElementById("language")).value;
    filterRequest.PublishYear= (<HTMLInputElement>document.getElementById("publishYear")).value;
    this.api.getFilteredBooks(filterRequest).subscribe((res:any)=> {
      if(res)
      {
        console.log(res)
      }
    }, (err:any)=> {
      alert("Something went wrong!!")
    }
);



  }
}
