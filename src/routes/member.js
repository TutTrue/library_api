import { Router } from "express";
import memberController from "../controllers/member.js";

const router = Router();

router.get("/", memberController.getmembers);
router.get("/:id", memberController.getmemberById);
router.post("/:id", memberController.getmember);
router.post("/", memberController.createmember);
router.put("/:id", memberController.updatemember);

export default router;
