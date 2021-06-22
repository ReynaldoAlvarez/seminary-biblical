import {Router} from 'express';
import * as movieCtrl from '../controller/movies.ctrl';

const router = Router();

router.route('/')
    .get(movieCtrl.getMovies);

export default router;