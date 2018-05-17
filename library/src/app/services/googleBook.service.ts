import {Book} from '../models/book.models';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


//RxJS operator for mapping the observable
import 'rxjs/add/operator/map';


@Injectable()
export class GoogleBookService {

  api_url = 'https://www.googleapis.com/books/v1/volumes?q=';


  constructor(
    private http: HttpClient
  ) { }


  getBooks(search:string): Observable<any[]>{
    return this.http.get(this.api_url+search)
    .map(res  => {
        console.log(this.api_url+search);
      //Maps the response object sent from the server
      let books = [];
      
      if(res['items']){
        let booksArray:any = res['items'];
        console.log(booksArray);
        for(let b of booksArray){
            let book = new Book();
            book._id= 'book';
            book.title = b['volumeInfo']['title'];
            book.pages = b['volumeInfo']['pageCount'];
            book.releaseDate = b['volumeInfo']['publishedDate'];
            book.author = b['volumeInfo']['authors'];
            books.push(book);
        }
      }
        
      return books;
    })
  }

   
      //Default Error handling method.
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }
}