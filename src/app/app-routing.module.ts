import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MyBooksComponent} from './my-books/my-books.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"home", component:HomeComponent, canActivate:[AuthGuard]} , // can activate/ load
  {path:"my-books", component:MyBooksComponent,canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }