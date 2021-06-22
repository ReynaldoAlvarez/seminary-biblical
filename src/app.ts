import express from 'express'
import  morgan from 'morgan'
import cors from 'cors'
import passport from 'passport'
import passportMedlewares from './middlewares/passport'
/* IMPORT ROUTES */
import categRoutes from './routes/categCourses.routes'
import movieRoutes from './routes/movies.routes'
import coursesRoutes from './routes/courses.routes'
import authRoutes from './routes/auth.routes'
import contentRoutes from './routes/content.routes'
const app = express()

/* meddlewares */

app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(passport.initialize())

passport.use(passportMedlewares)
/* API ROUTES*/
app.use('/api/categcourses', categRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);


export default app;