import {model, Schema} from 'mongoose'
import { timeStamp } from 'node:console'

const categCoursesSchema = new Schema({
    categ_name:{ type: String, required: true, unique: true},
    description:{type: String, required: true, trim: true},
    level:{type: String, required: true, trim: true},
    url_image: {type: String, required: false},
    slug: {type: String, required: true}, 
    state:{type: Boolean, required: true}, 
}, {timestamps: true, versionKey: false})

export default model('categ_courses', categCoursesSchema);