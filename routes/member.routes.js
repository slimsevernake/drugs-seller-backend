import { Router } from "express";
const router = Router();

import {
    getAllMembers,
    getMemberById,
    createMember
} from "../controllers/member.controllers.js"

router.get("/", getAllMembers);
router.get("/:id", getMemberById);
router.post("/", createMember);

export default router