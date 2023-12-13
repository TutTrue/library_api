import { Router } from "express";
import memberController from "../controllers/member.js";

const router = Router();

router.get("/", memberController.getmembers);

export default router;