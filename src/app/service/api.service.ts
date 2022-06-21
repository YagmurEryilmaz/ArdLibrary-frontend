
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
    BorrowDto,
    BorrowAddDto,
    PrevBorrow
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

    getFilteredBooks(){
        return this.http.get<Array<Book>>(
          "https://localhost:7109/api/Book/Filter",
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }
    getBorrowedBooks(){
        return this.http.get<Array<Borrow>>(
          "https://localhost:7109/api/Borrow",
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }

      getPrevBorrowedBooks(){
        return this.http.get<Array<PrevBorrow>>(
          "https://localhost:7109/api/PrevBorrow",
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }


    addBorrowedBooks(data: BorrowAddDto) {
      console.log(data);
        return this.http.post<BorrowDto>(
          "https://localhost:7109/api/Borrow",
          data,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }

      addPrevBorrowedBooks(data: BorrowAddDto) {
        console.log(data);
          return this.http.post<BorrowDto>(
            "https://localhost:7109/api/PrevBorrow",
            data,
            { headers: new HttpHeaders(this.httpOptions) }
          );
        }

      getBorrowedBooksById(id:number){
        console.log(id);
        return this.http.get<Array<Borrow>>(
          "https://localhost:7109/api/Borrow/GetBorrowedBooksById/" +id,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }

      getPrevBorrowedBooksById(id:number){
        console.log(id);
        return this.http.get<Array<Borrow>>(
          "https://localhost:7109/api/PrevBorrow/GetPrevBorrowedBooksById/" +id,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }
      getBookById(id:number){
        console.log(id);
        return this.http.get<Book>(
          `https://localhost:7109/api/Book/GetBookById/${id}`,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }

      deleteBorrowedBook(id: number) {
        return this.http.delete<any>(
          `https://localhost:7109/api/Borrow/${id}`,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }
    }
