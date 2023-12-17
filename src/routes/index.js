import { Router } from "express";
import memberRouter from "./member.js";
import bookRouter from "./book.js";
import authorRouter from "./author.js";
import borrowRouter from "./borrow.js";
const router = Router();

router.use("/book", bookRouter);
router.use("/member", memberRouter);
router.use("/author", authorRouter);
router.use("/borrow", borrowRouter);

export default router;