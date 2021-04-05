import app from "./app";
import {connect} from"./db/mongodb";

connect();

const PORT = 4000;

app.listen(PORT, ()=> console.log('Access port '+PORT) );