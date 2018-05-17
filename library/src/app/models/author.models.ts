// _id: mongoose.Schema.Types.ObjectId,
// fname: {type:String, required: true},
// lname: {type:String, required: true},
// pseudonym: {type:String, required: false},
// birthDate: {type:Date, required: true},
// deadDate: {type:Date, required: false},
// books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: false }]
import {Book} from './book.models'

export class Author {
    _id:string;
    fname: string;
    lname: string;
    pseudonym: string;
    releaseDate: Date;
    deadDate: Date;
    books: Array<Book>;
}


