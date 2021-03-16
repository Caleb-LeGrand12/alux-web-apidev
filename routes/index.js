import express from "express";
import membersRouter from "./membersRouter.js";
import usersRouter from "./usersRouter.js";

const router = express.Router();

router.use("/members", membersRouter);
router.use("/users", usersRouter);
router.use("/books", usersRouter);
export default router;
