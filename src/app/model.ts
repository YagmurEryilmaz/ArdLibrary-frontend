export interface Book{
    Id:number;
    Title:string;
    AuthorName:string;
    PublishYear:number;
    Genre:string;
    Language:string;
    IsBorrowed:boolean;
}

export interface User{
    Name:string;
    Email:string;
    Id:number;
    Password:string;
}

export interface Borrow
{
    Title:string;
    AuthorName:string;
    Id:number;
    ExpDate:Date;
}

export interface PrevBorrow
{
    Title:string;
    AuthorName:string;
    Id:number;
    ExpDate:Date;
}