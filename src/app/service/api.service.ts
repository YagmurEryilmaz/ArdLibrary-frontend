
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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
    PrevBorrow,
    FilterDto
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

    getFilteredBooks(filterReq: FilterDto){
        return this.http.get<Array<Book>>(
          "https://localhost:7109/api/Book/Filter",
          { headers: new HttpHeaders(this.httpOptions), params: { AuthorName: filterReq.AuthorName, Genre:filterReq.Genre, Language:filterReq.Language, PublishYear:filterReq.PublishYear } }, 
          
        );
      }
    getBorrowedBooks(){
        return this.http.get<Array<Borrow>>(
          "https://localhost:7109/api/Borrow/getBorrowedBooks",
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

      addBooks(data: BookDto) {
        console.log(data);
          return this.http.post<BookDto>(
            "https://localhost:7109/api/Book/addBook",
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
          "https://localhost:7109/api/Borrow/GetPrevBorrowedBooksById/" +id,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }

      getBorrowDate(id:number){
        console.log(id);
        return this.http.get<Array<Date>>(
          "https://localhost:7109/api/Borrow/GetBorrowDate/" +id,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }

      getRealExpDate(id:number){
        console.log(id);
        return this.http.get<Array<Date>>(
          "https://localhost:7109/api/Borrow/GetRealExpDate/" +id,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }

      getCurrBorrowedBooksById(id:number){
        console.log(id);
        return this.http.get<Array<Borrow>>(
          "https://localhost:7109/api/Borrow/GetCurrentlyBorrowedBooksById/" +id,
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

      deleteBook(id: number) {
        return this.http.delete<any>(
          `https://localhost:7109/api/Book/${id}`,
          { headers: new HttpHeaders(this.httpOptions) }
        );
      }
    }
