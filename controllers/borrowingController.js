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
  console.log(req.body);
  res.send(req.body);
}

//Delete a borrowing
export function deleteBorrowing(req, res) {
  console.log(req.body);
  res.send(req.body);
}
