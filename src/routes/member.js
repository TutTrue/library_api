import { Router } from "express";
import memberController from "../controllers/member.js";

const router = Router();

router.get("/", memberController.getmembers);
router.post("/:id", memberController.getmember);
router.post("/", memberController.createmember);

export default router;