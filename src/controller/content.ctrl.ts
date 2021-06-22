import {RequestHandler, Response} from 'express'
import Contetn from '../models/content.schema'

export const getContetns: RequestHandler  = async(req, res) =>{
    const allContetn = await Contetn.find();
    return res.status(200).json(allContetn)
}
export const createContetn: RequestHandler = async (req, res) => {
    const contentFound = await Contetn.findOne({ slug: req.body.slug });
    if (contentFound)
      return res.status(303).json({ message: "the course already exists" });
  
      try {
        const newContent = new Contetn(req.body);
        const savedContent = await newContent.save();
        return res.json(savedContent); 
      } catch (error) {
        return res.status(500).json(error)
      }
    
  };