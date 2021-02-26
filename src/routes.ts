import { Router } from 'express';
import SurveysController from './controllers/SurveysController';
import UserController from './controllers/UserController';
import SendMailController  from './controllers/SendMailController';

const router = Router();

router.post('/users', UserController.create);

router.get('surveys', SurveysController.show);
router.post('/surveys', SurveysController.create);

router.post('/sendMail', SendMailController.execute);

export default router;