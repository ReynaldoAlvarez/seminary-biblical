import {model, Schema} from 'mongoose'
import { timeStamp } from 'node:console'

const coursesSchema = new Schema({
    n_course:{type:Number, required:true},
    title:{ type: String, required: true, trim: true},
    description:{type: String, required: true, trim: true},
    url_image: {type: String, required: false},
    slug: {type: String, required: true}, 
    state:{type: Boolean, required: true},
    teacher:{type: Schema.Types.ObjectId, ref: 'users'},
    id_categ_course : {type: Schema.Types.ObjectId, ref: 'categ_courses'}
   
}, {timestamps: true, versionKey: false})

export default model('courses', coursesSchema);