import { Component, OnInit } from '@angular/core';
import{ApiService} from "../service/api.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.api.getBooks()
      .subscribe((res: any)=> {
        debugger;
        let t = res
      });
    
  }

}
