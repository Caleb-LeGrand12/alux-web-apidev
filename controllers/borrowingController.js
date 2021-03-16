import Borrowing from "../models/borrowing.model.js";

//Add a book borrowing
export async function addBorrowing(req, res) {
  try {
    let borrowing = await Borrowing.create(req.body);
    if (borrowing) {
      res.status(200).json({
        success: true,
        message: "Borrowing created successfully",
        data: borrowing,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Borrowing could not be created at this time",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//View a borrowing
export async function viewBorrowing(req, res) {
  try {
    let allborrowings = await Borrowing.findAll({
      where: { borrowing_id: req.params.id },
    });
    if (allborrowings) {
      res.json({
        success: true,
        message: "Borrowing records retrieved successfully",
        data: allborrowings,
      });
    } else {
      res.json({
        success: true,
        message: "No Borrowing records found.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//View all borrowings
export async function viewAllBorrowings(req, res) {
  try {
    let allborrowings = await Borrowing.findAll();
    if (allborrowings) {
      res.json({
        success: true,
        message: "Borrowing records retrieved successfully",
        data: allborrowings,
      });
    } else {
      res.json({
        success: true,
        message: "No Borrowing records found.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//Update borrowing record
export function updateBorrowing(req, res) {
  let updatedOps = {};
  const id = req.params.borrow_id;
  for (const ops of req.body) {
    updatedOps[ops.propName] = ops.value;
  }

  book
    .updateOne({ borrow_id: id }, { $set: updatedOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "book borrow record updated",
        data: borrowing,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        err: err,
        message: "Oopss! Something is wrong...",
      });
    });
}

//Delete a borrowing
export function deleteBorrowing(req, res) {
  const id = req.params.borrow_id;

  book
    .remove({ borrow_id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "book borrowed record deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        err: err,
        message: "Oopss! Something is wrong...",
      });
    });
}
