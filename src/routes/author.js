import { Router } from "express";
import authorController from "../controllers/author.js";

const router = Router();

router.get("/", authorController.getAuthors);
router.get("/:id", authorController.getAuthor);
router.post("/", authorController.createAuthor);

export default router;