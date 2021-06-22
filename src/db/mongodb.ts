import mongoose from 'mongoose';
import config from '../config/config'
// mdb  = conection methos mongoose
let database: mongoose.Connection;

export const connect = async()=>{
    
    if(database){
        return console.log('DATABASE NO CONECTED - ERROR');
    }
      mongoose.connect(config.DB.URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });

      database = mongoose.connection;

      await database.once("open", () => {
        console.log("Connected to database MongoDB");
      });

      database.on("error", () => {
        console.log("Error connecting to database MongoDB");
      });
      
}

export const disconnect = () => {
    if (!database) {
      return;
    }
    mongoose.disconnect();
  };