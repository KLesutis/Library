import {Book} from './book.models'
import {Author} from './author.models'
import {Reader} from './reader.models'
import {Librarian} from './librarian.models'


export class Order {
    _id:string;
    librarian: Librarian;
    reader: Reader;
    books: Array<Book>;
    returnDate: Date;
    takenDate: Date;
}
