 export class LoginDto {
    public Email!: string;
    public Password!: string;
  }

  export class LoginResponseDto {
    public AccessToken!: string;
      public UserDto!:UserDto;
  }
  
  export class BookDto
    {
        public Id !: number;
        public Title!: string;
        public  AuthorName!:string ;
        public IsBorrowed!:boolean;
        public PublishYear !: number;
        public ImageUrl !:string ;
        public  Subject!:string ;
        public Genre !:string ;
        public Language!:string ;
    }

   export class BorrowDto
    {
        public Id !: number;
        public UserId !: number;
        public BookId !: number;
        public ExpDate!:Date;
    }

    export class BorrowAddDto
    {
        public UserId!: number;
        public BookId!: number;
        public ExpDate!:Date;
    }

    export class UserDto
    {
        public Id !: number;
        public Name!: string;
        public  Email!:string ;
        public Password!:number;
    }

    export class Book
    {
        public Id !: number;
        public Title!: string;
        public  AuthorName!:string ;
        public  PublishYear!:number ;
        public  Genre!:string ;
        public  Language!:string ;
        public IsBorrowed!:boolean;
        public ImageUrl:string ="";
        public Subject!:string;
    }

    export class FilterDto
    {
        public  AuthorName!:string ;
        public  PublishYear!:string ;
        public  Genre!:string ;
        public  Language!:string ;
    }

    export class Borrow
    {
        public Id !: number;
        public UserId !: number;
        public BookId !: number;
        public ExpDate!:Date;
        public Book!: Book
        public User!:User;
    }

    export class PrevBorrow
    {
        public Id !: number;
        public UserId !: number;
        public BookId !: number;
        public ExpDate!:any;
        public Book!: Book
    }

    export class User
    {
        public Id !: number;
        public Name!: string;
        public  Email!:string ;
        public Password!:number;
        public Role!:string;
    }
  