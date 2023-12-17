import { Router } from "express";
import borrowController from "../controllers/borrow.js";

const router = Router();

router.post("/", borrowController.createBorrow);

export default router;