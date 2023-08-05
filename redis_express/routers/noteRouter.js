import Router from 'express';

const router = new Router();

import noteController from '../controllers/noteController.js';
import authMiddleware from '../middleware/authMiddleware.js';

router.post('/', authMiddleware, noteController.create);

router.get('/', authMiddleware, noteController.findAll);
router.get('/:id', authMiddleware, noteController.findOne);

router.patch('/:id', authMiddleware, noteController.update);
router.delete('/:id', authMiddleware, noteController.remove);

export default router;