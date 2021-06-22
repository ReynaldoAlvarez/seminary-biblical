import {Router} from 'express';
import * as contetnCtrl from '../controller/content.ctrl'
const router = Router();

router.route('/')
	.post(contetnCtrl.createContetn)
	.get(contetnCtrl.getContetns)

export default router;