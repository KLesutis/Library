import {Order} from './order.models';

export class Reader {
    _id:string;
    fname: string;
    lname: string;
    phoneNumber: string;
    email: string;
    orders: Array<Order>;
}

 

// _id: mongoose.Schema.Types.ObjectId,
// fname: {type:String, required: true},
// lname: {type:String, required: true},
// phoneNumber: {type:String, required: true},
// email: {type:String, required: true},
// orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: false }]