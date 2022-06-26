import { Component, OnInit } from '@angular/core';
import { AddNewBookModalComponent } from '../add-new-book-modal/add-new-book-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private addBookRef: MatDialog) { }

  ngOnInit(): void {
  }

  addBook():void
  {
  
    let dialogRef= this.addBookRef.open(AddNewBookModalComponent,
    {
      width: "890px",
      height:"auto",
    });

  }

}
