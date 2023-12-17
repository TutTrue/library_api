import { Router } from "express";
import bookController from "../controllers/book.js";

const router = Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBooksByAuthor);
router.post("/", bookController.createBook);

export default router;