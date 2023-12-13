import { Router } from "express";
import memberRouter from "./member.js";
import bookRouter from "./book.js";
import autherRouter from "./auther.js";
const router = Router();

router.use("/book", bookRouter);
router.use("/member", memberRouter);
router.use("/auther", autherRouter);

export default router;