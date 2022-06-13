import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MyBooksComponent} from './my-books/my-books.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:"home", component:HomeComponent}, // can activate/ load
  {path:"my-books", component:MyBooksComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
