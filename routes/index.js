import { Router } from "express";

import member from "./member.routes.js";
import drug from "./drug.routes.js";
import auth from './auth.routes.js';
import wallet from './wallet.routes.js';

const router = Router();

router.use("/members", member);
router.use("/drugs", drug);
router.use("/auth", auth);
router.use("/wallets", wallet);

export default router;