import { Component, OnInit } from '@angular/core';
import { BookDto } from '../model/models';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-add-new-book-modal',
  templateUrl: './add-new-book-modal.component.html',
  styleUrls: ['./add-new-book-modal.component.css']
})
export class AddNewBookModalComponent implements OnInit {

  constructor(private api:ApiService) { }
 
 
  ngOnInit(): void {
  }

  public isChecked = false;

  addBooks(){
    var bookRequest = new BookDto();
    bookRequest.Title= (<HTMLInputElement>document.getElementById("title")).value;
    bookRequest.AuthorName= (<HTMLInputElement>document.getElementById("author")).value;
    bookRequest.Genre=(<HTMLInputElement>document.getElementById("genre")).value;
    bookRequest.Language=(<HTMLInputElement>document.getElementById("lang")).value;
    bookRequest.PublishYear=parseInt((<HTMLInputElement>document.getElementById("year")).value);
    bookRequest.ImageUrl=(<HTMLInputElement>document.getElementById("url")).value;
    bookRequest.Subject=(<HTMLInputElement>document.getElementById("subject")).value;

    var confirmation = (<HTMLInputElement>document.getElementById("confirmation")).value;
    console.log("helloooo", confirmation);

    this.api.addBooks(bookRequest).subscribe((res:any)=> {
      if(res&& confirmation == "on")
      {
        alert("Book is successfully added!!")
        window.location.reload();
      }
      else{
        alert("Please check the validity of book info!")
      }
    }, (err:any)=> {
      alert("This Book is already in the system!!")
    })

  }

  checkCheckBoxvalue(){
    
    console.log(this.isChecked)

  }

}
