import express from "express";
import {
  addUser,
  viewAllUsers,
  viewUser,
  signIn,
} from "../controllers/usersController.js";
import { authenticate } from "../middlewares/auth.js";

const usersRouter = express.Router();

//Add a User - Sign Up - Authenticate.
usersRouter.post("/", authenticate, addUser);

//Add a User - Sign In - No need of Authentication
usersRouter.post("/signin", authenticate, signIn);

//View a User users/:id - Authenticate.
usersRouter.get("/:id", authenticate, viewUser);

//View all Users users/ - Authenticate.
usersRouter.get("/", authenticate, viewAllUsers);

export default usersRouter;
