import {Router} from 'express';
import * as categCourseCtrl from '../controller/categCourses.ctrl';
import passport from 'passport';
const router = Router();

router.route('/')
    .get(/* passport.authenticate('jwt', {session: false}), */categCourseCtrl.getCategCourses)
    .post(categCourseCtrl.createCategCourses);
    
router.route('/:id')
    .get(categCourseCtrl.getOneCourse)
export default router