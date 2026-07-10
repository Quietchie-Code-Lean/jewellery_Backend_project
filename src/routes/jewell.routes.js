import { Router } from "express";
import { getJewelsController } from "../controllers/jewel.controller";


const router = Router();

router.get("/jewels", getJewelsController())







export default router;