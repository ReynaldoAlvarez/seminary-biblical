import {model, Schema} from 'mongoose'
import { timeStamp } from 'node:console'

const movieSchema = new Schema({
    title:{ type: String, required: true, trim: true},
    description:{ type: String, required: true, trim: true},
    url:{type: String, required: true, trim: true}
}, {timestamps: true, versionKey: false})

export default model('movies', movieSchema);