import { Router } from "express";
import memberRouter from "./member.js";
import bookRouter from "./book.js";
import authorRouter from "./author.js";
const router = Router();

router.use("/book", bookRouter);
router.use("/member", memberRouter);
router.use("/author", authorRouter);

export default router;