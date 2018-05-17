import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatListModule,MatMenuModule,MatCardModule,MatToolbarModule,MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import { AddBookComponent } from './add-book/add-book.component';
import { GoogleBookService } from './services/googleBook.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent
  ],entryComponents: [
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,

    NgbModule.forRoot()
  ],exports: [MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,],
  providers: [
    BookService,
    GoogleBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
