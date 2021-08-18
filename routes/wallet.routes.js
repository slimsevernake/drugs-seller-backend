import { Router } from 'express';

const router = Router ();

import {
    createWallet,
    getWallet,
} from "../controllers/wallet.controller.js";

router.post("/", createWallet);
router.get("/", getWallet);
export default router