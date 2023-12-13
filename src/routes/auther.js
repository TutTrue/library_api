import { Router } from "express";
import autherController from "../controllers/auther.js";

const router = Router();

router.get("/", autherController.getAuthers);
router.post("/", autherController.createAuther);

export default router;