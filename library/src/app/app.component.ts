import { Component, OnInit } from '@angular/core';
import { Book } from './models/book.models';
import { BookService } from './services/book.service';
import {MatTableDataSource, MatDialog} from '@angular/material';
import { AddBookComponent } from './add-book/add-book.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public newBook: Book = new Book();

  bookList: Book[];

  constructor(private bookService: BookService,public dialog: MatDialog){

  }

  openDialog() {
    const dialogRef = this.dialog.open(AddBookComponent,{height:'90%',width:'95%'});

    dialogRef.afterClosed().subscribe(result => {
     this.updateBookList();
      
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit():void{
     this.updateBookList();
  }
  updateBookList():void{
    this.bookService.getBooks().subscribe(books => {
      this.bookList = books;
      console.log(books);
      this.dataSource = new MatTableDataSource(this.bookList);
    });
  }
  deleteBook(book:Book){
    if(confirm("Are you sure to delete "+book.title)) {
      this.bookService.deleteBook(book._id).subscribe(res =>{
        this.updateBookList();
      });
    }
    
    
  }
  
  displayedColumns = ['title', 'pages', 'releasedate','author','delete'];
  dataSource;

}

