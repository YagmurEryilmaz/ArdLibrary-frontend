import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { CurrBorrowedListComponent } from './curr-borrowed-list/curr-borrowed-list.component';
import { PrevBorrowedListComponent } from './prev-borrowed-list/prev-borrowed-list.component';
import { LoginComponent } from './login/login.component';
import { ShowDetailModalComponent } from './show-detail-modal/show-detail-modal.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowDetailModule } from './show-detail-modal/show-detail-module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ListFilterPipe } from './listFilterPipe';
import { FilterComponent } from './filter/filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {PageEvent} from '@angular/material/paginator';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddNewBookModalComponent } from './add-new-book-modal/add-new-book-modal.component';
import { AdminBookListComponent } from './admin-book-list/admin-book-list.component';
import { BorrowHistoryModalComponent } from './borrow-history-modal/borrow-history-modal.component';

@NgModule({
  
  exports: [AppComponent],
  declarations: [
    AppComponent,
    BookListComponent,
    NavbarComponent,
    HomeComponent,
    MyBooksComponent,
    CurrBorrowedListComponent,
    PrevBorrowedListComponent,
    LoginComponent,
    RegisterComponent,
    ListFilterPipe,
    FilterComponent,
    AdminPageComponent,
    AddNewBookModalComponent,
    AdminBookListComponent,
    BorrowHistoryModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ShowDetailModule,
    NgxPaginationModule,
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
