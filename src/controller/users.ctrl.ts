import {RequestHandler, Response} from 'express';
import Users from '../models/users.schema';

export const getUsers: RequestHandler  = async(req, res) =>{
    const allVideos = await Users.find();
    return res.status(200).json(allVideos)
}
export const createUsers: RequestHandler = async (req, res) => {
    const videoFound = await Users.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(303).json({ message: "the url already exists" });
  
    const newVideo = new Users(req.body);
    const savedVideo = await newVideo.save();
    res.json(savedVideo);
  };
  
  export const getOneUsers: RequestHandler = async (req, res) => {
    const videoFound = await Users.findById(req.params.id);
  
    if (!videoFound) return res.status(204).json();
  
    return res.json(videoFound);
  };
  
  export const deleteUsers: RequestHandler = async (req, res) => {
    const videoFound = await Users.findByIdAndDelete(req.params.id);
  
    if (!videoFound) return res.status(204).json();
  
    return res.status(204).json();
  };
  
  export const updateVideo: RequestHandler = async (
    req,
    res
  ): Promise<Response> => {
    const videoUpdated = await Movies.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!videoUpdated){
        return res.status(204).json();  
    } 
    return res.json(videoUpdated);
  };