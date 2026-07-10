import { Router } from "express";
import { getJewelsController, getJewelsControllerFilters } from "../controllers/jewel.controller.js";


const router = Router();

//GET route..
router.get("/jewels", getJewelsController)

//GET Route Filtered..

router.get("/jewels/filters", getJewelsControllerFilters)






export default router;