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

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavbarComponent,
    HomeComponent,
    MyBooksComponent,
    CurrBorrowedListComponent,
    PrevBorrowedListComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
