import Book from "../Model/bookSchema.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find({});
    // console.log(book);
    res.status(200).json(book); // Chain status with json method
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ error: error.message }); // Ensure error is formatted as an object
  }
};

export const getFreeBook = async (req, res) => {
  try {
    const book = await Book.find({ subscription: "free" });
    // console.log(book)
    res.status(200).json(book); // Chain status with json method
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ error: error.message }); // Ensure error is formatted as an object
  }
};

export const getSearchBook = async (req, res) => {
  try {
    let { bookName } = req.query;
    console.log(bookName);
    const book = await Book.find({ name: new RegExp(bookName, "i") });
    res.status(200).json(book);
  } catch (err) {
    console.log("Error :", err);
    res.status(500).json({ err: err.message });
  }
};
