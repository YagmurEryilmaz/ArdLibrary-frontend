import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { ShowDetailModalComponent } from './show-detail-modal.component';
  
@NgModule({
  declarations: [ShowDetailModalComponent],
  entryComponents: [ShowDetailModalComponent],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
})
export class ShowDetailModule {}