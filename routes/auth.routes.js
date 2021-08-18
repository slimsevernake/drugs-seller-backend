import { Router } from 'express';
const router = Router();

import { userAuth } from '../controllers/auth.controller.js';

router.post("/login", userAuth);

export default router;