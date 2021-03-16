import express from "express";
import {
  addBorrowing,
  viewAllBorrowings,
  viewBorrowing,
  updateBorrowing,
  deleteBorrowing,
} from "../controllers/borrowingController.js";

const borrowingRouter = express.Router();

//Add a Borrowing
borrowingRouter.post("/", addBorrowing);

//View a borrowing borrowings/:id
borrowingRouter.get("/:id", viewBorrowing);

//View all borrowings borrowings/
borrowingRouter.get("/", viewAllBorrowings);

//Update borrowing record borrowings/:id
borrowingRouter.put("/:id", updateBorrowing);

//Delete a borrowing borrowings/:id
borrowingRouter.delete("/:id", deleteBorrowing);

export default borrowingRouter;
