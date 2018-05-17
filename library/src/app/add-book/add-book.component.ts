import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.models';
import { BookService } from '../services/book.service';
import { MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { GoogleBookService } from '../services/googleBook.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  public newBook: Book = new Book();

  bookList: Book[];
  search:string = 'Book';

  constructor(public snackBar: MatSnackBar,private bookService:BookService,private googleBookService: GoogleBookService,public dialogRef: MatDialogRef<AddBookComponent>){

  }

 
  close() {
    this.dialogRef.close();
}
ngOnInit():void{
  
}
getBooks():void{
  this.googleBookService.getBooks(this.search).subscribe(books => {
    console.log(this.search);
    this.bookList=[];
    this.bookList = books;
    this.dataSource = new MatTableDataSource(this.bookList);

    if(this.bookList.length <= 0){
      this.snackBar.open('Nothing found','OK',{
        duration: 2000,
      });
    }
      
    });
}
addBook(book:Book){
 console.log('asd'+book.author);
  this.bookService.createBook(book).subscribe(res =>{
      console.log(res);
      this.snackBar.open('Added','OK',{
        duration: 2000,
      });
  });
}


  
  displayedColumns = ['title', 'pages', 'releasedate','authors','delete'];
  dataSource;

}
