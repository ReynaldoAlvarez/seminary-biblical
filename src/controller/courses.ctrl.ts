import {RequestHandler, Response} from 'express'
import Courses from '../models/courses.schema'

export const getCourses: RequestHandler  = async(req, res) =>{
    const allCourses = await Courses.find();
    return res.status(200).json(allCourses)
}
export const createCourses: RequestHandler = async (req, res) => {
    const coursesFound = await Courses.findOne({ title: req.body.title });
    if (coursesFound)
      return res.json({ message: "este curso ya existe" });
  
      try {
        const newCourse = new Courses(req.body);
        const savedCourse = await newCourse.save();
        return res.status(200).json(savedCourse);
      } catch (error) {
        return res.status(500).json(error)
      }
 
  };