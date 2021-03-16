import express from "express";
import {
  addBook,
  viewAllBooks,
  viewBooks,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";
import { authenticate } from "../middlewares/auth.js";

const booksRouter = express.Router();

//Add a book
booksRouter.post("/", authenticate, addbook);

//View a book books/:id
booksRouter.get("/:id", authenticate, viewbook);

//View all books books/
booksRouter.get("/", authenticate, viewAllbooks);

//Update book record books/
booksRouter.put("/", authenticate, updatebook);

//Delete a book books/:id
booksRouter.delete("/:id", authenticate, deletebook);

export default booksRouter;
