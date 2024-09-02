import {model, Schema} from 'mongoose';

export const ProductsSchema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
});

export const Products = model('Products', ProductsSchema)