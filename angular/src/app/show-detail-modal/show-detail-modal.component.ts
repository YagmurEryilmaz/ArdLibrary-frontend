import { Component, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Book } from '../model';


@Component({
  selector: 'app-show-detail-modal',
  templateUrl: './show-detail-modal.component.html',
  styleUrls: ['./show-detail-modal.component.css']
})
export class ShowDetailModalComponent {

  constructor(public dialogRef: MatDialogRef<ShowDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  closeModal(){

    this.dialogRef.close();

  }


}


