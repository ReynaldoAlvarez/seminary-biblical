import {model, Schema} from 'mongoose'
import { timeStamp } from 'node:console'

const contentsSchema = new Schema({
    n_content:{ type: Number, required: true},
    description:{type: String, required: true, trim: true},
    title:{type: String, required: true, trim: true},
    content: {type: String, required: false},
    url_movie: {type: String, required: false}, 
    state:{type: Boolean, required: true},
    ispremium: {type:Boolean,required:true},
    slug:{type:String, required: false},
    id_course:{type: Schema.Types.ObjectId, ref: 'courses'}
}, {timestamps: true, versionKey: false})

export default model('contents', contentsSchema);