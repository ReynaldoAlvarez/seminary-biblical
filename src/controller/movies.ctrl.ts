import {RequestHandler, Response} from 'express'
import Movies from '../models/movies.schema'

export const getMovies: RequestHandler  = async(req, res) =>{
    const allVideos = await Movies.find();
    return res.status(200).json(allVideos)
}
export const createMovies: RequestHandler = async (req, res) => {
    const videoFound = await Movies.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(303).json({ message: "the url already exists" });
  
    const newVideo = new Movies(req.body);
    const savedVideo = await newVideo.save();
    res.json(savedVideo);
  };
  
  export const getOneMovies: RequestHandler = async (req, res) => {
    const videoFound = await Movies.findById(req.params.id);
  
    if (!videoFound) return res.status(204).json();
  
    return res.json(videoFound);
  };
  
  export const deleteMovies: RequestHandler = async (req, res) => {
    const videoFound = await Movies.findByIdAndDelete(req.params.id);
  
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