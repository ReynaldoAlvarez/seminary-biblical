import {model, Schema, Document} from 'mongoose'
import { timeStamp } from 'node:console'
import bcrypt from 'bcrypt'
// PAROVECHAMOS LAS PROPIEDADES DE TYPESCRIPT
export interface IUsers extends Document{
    email: string;
    password:string;
    comparePassword: (password: string, hashpassword:string) => Promise<Boolean>;
    name:string;
    last_name:string;
    url_avatar:string;
    phone:number;
    country:string;
    city:string;
    address: string;
    rol:string;
}
const usersSchema = new Schema({
    name:{ type: String, required: true, trim: true},
    last_name:{type: String, required: true, trim: true},
    url_avatar:{type: String, required: false, trim: true},
    phone: {type: Number, required: false, trim: true},
    country: {type: String, required: false, trim: true}, 
    city:{type: String, required: false, trim: true},
    address: {type: String, required:false, trim: true},
    email:{type:String, required: true, trim: true},
    password:{type:String, required: true},
    rol:{type:String, enum:["SAD","ADM","COL","PRO","EST"], required: true}
}, {timestamps: true, versionKey: false})

usersSchema.pre<IUsers>('save', async function(next){
    const users = this;
    if(!users.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(users.password, salt) 
    users.password = hash;
    next();
})

usersSchema.methods.comparePassword =  async function(password: string, hashpassword: string): Promise<Boolean>{

return await bcrypt.compare(password, hashpassword);
}

export default model<IUsers>('users', usersSchema);