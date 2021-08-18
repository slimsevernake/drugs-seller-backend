import { Router } from "express";

const router = Router();

import {
    createDrugsList,
    getAllDrugsList,
    getDrugsListById
} from "../controllers/drugs.controller.js"

router.post("/", createDrugsList);
router.get("/", getAllDrugsList);
router.post("/persoList", getDrugsListById);
export default router;