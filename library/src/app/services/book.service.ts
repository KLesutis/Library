import {Book} from '../models/book.models';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


//RxJS operator for mapping the observable
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {

  api_url = 'http://localhost:3000';
  bookUrl = this.api_url+'/books';

  constructor(
    private http: HttpClient
  ) { }

  createBook(book: Book): Observable<any>{
    //returns the observable of http post request 
 console.log('asd'+book.author);
    
    return this.http.post(this.bookUrl, book);
  }

  getBooks(): Observable<Book[]>{
    return this.http.get(this.bookUrl)
    .map(res  => {
      //Maps the response object sent from the server
        let books = res['books'];
        console.log('asd'+books);
        
      return books;
    })
  }

    //Update book, takes a ToDo Object as parameter
    editBook(book:Book){
        let editUrl = this.bookUrl
        //returns the observable of http put request 
        return this.http.put(editUrl, book);
      }
    
      deleteBook(id:string):any{
        //Delete the object by the id
        let deleteUrl = this.bookUrl+'/'+id;
        return this.http.delete(deleteUrl)
        .map(res  => {
          return res;
        })
      }
    
      //Default Error handling method.
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
      }
}