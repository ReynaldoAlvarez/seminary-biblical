import {Router} from 'express';
import * as courseCtrl from '../controller/courses.ctrl';
import passport from 'passport';
const router = Router();

router.route('/')
    .get(/* passport.authenticate('jwt', {session: false}), */courseCtrl.getCourses)
    .post(courseCtrl.createCourses)

export default router