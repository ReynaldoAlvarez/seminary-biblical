import express from 'express'
import  morgan from 'morgan'
import cors from 'cors'
/* IMPORT ROUTES */
import movieRoutes from './routes/movies.routes'
const app = express()

/* meddlewares */

app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

/* API ROUTES*/
app.use('/api', movieRoutes);


export default app;