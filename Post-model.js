import {model, Schema} from 'mongoose';

export const PostsSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
})

export const Posts = model('Posts', PostsSchema)