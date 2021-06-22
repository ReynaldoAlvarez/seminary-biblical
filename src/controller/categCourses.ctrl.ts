import {RequestHandler, Response} from 'express'
import categCourses from '../models/categCourse.schema'

export const getCategCourses: RequestHandler  = async(req, res) =>{
    const allCourses = await categCourses.find();
    return res.status(200).json(allCourses)
}
export const createCategCourses: RequestHandler = async (req, res) => {
    const coursesFound = await categCourses.findOne({ slug: req.body.slug });

    if (coursesFound) 
    return res.status(303).json({ message: "esta categoria de curso ya existe" });
  
    try {
      const newCourse = new categCourses(req.body);
      const savedCourse = await newCourse.save(); 
      return res.json(savedCourse);
    } catch (error) {
       console.log(error)
       return res.status(500).json(error)
    }
    
  };
export const getOneCourse: RequestHandler = async(req,res)=>{
  try {
    const oneCourse = await categCourses.findOne({slug: req.params.id})  
    return res.json(oneCourse)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error) 
  }
  

}