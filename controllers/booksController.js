import Book from "../models/Books.model.js";

//Add a Book
export async function addBook(req, res) {
  try {
    let book = await Book.create(req.body);
    if (book) {
      res.status(200).json({
        success: true,
        message: "Book created successfully",
        data: book,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book could not be created at this time",
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

//View a Book
export async function viewBook(req, res) {
  try {
    let allbooks = await Book.findAll({
      where: { book_id: req.params.id },
    });
    if (allbooks) {
      res.json({
        success: true,
        message: "Book records retrieved successfully",
        data: allbooks,
      });
    } else {
      res.json({
        success: true,
        message: "No Book records found.",
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

//View all Books
export async function viewAllBooks(req, res) {
  try {
    let allbooks = await Book.findAll();
    if (allbooks) {
      res.json({
        success: true,
        message: "Book records retrieved successfully",
        data: allbooks,
      });
    } else {
      res.json({
        success: true,
        message: "No Book records found.",
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

//Update Book record
export function updateBook(req, res) {
  console.log(req.body);
  res.send(req.body);
}

//Delete a Book
export function deleteBook(req, res) {
  console.log(req.body);
  res.send(req.body);
}
