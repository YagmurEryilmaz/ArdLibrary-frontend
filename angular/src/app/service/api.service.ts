
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    Book,
    BookDto,
    User,
    UserDto,
    LoginDto,
    LoginResponseDto,
    Borrow,
    BorrowDto
} from "../model/models";

@Injectable({
    providedIn: "root",
  })

  export class ApiService {
    httpOptions: any;
    constructor(private http: HttpClient) {
      this.httpOptions = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
    }
    login(data: LoginDto) {
        return this.http.post<LoginResponseDto>(
          "https://localhost:7109/api/Login",
          data
        );
      }
    getBooks(){
        return this.http.get<Array<Book>>(
          "https://localhost:7109/api/Book",
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }
    
    }
