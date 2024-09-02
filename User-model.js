import {model, Schema} from 'mongoose';

export const UsersSchema = new Schema({
    login: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    token: {type: String, required: true},
})

export const Users = model('Users', UsersSchema)

