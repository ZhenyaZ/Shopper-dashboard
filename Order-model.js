import {model, Schema} from 'mongoose';

export const OrderSchema = new Schema({
    orderID : {type: String, required: true},
    userID : {type: String, required: true},
    name : {type: String, required: true},
    email : {type: String, required: true},
    phone : {type: String, required: true},
    address : {type: String, required: true},
    city : {type: String, required: true},
    country : {type: String, required: true},
    zip : {type: String, required: true},
    products : {type: Array, required: true},
    total : {type: Number, required: true},
})

export const Orders = model('orders', OrderSchema)

