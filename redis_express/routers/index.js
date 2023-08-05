import Router from 'express';

import userRouter from './userRouter.js';
import noteRouter from './noteRouter.js';


let router = Router();

router.use('/user', userRouter);
router.use('/note', noteRouter);

export default router;
