import express from "express";
import { getBook,getFreeBook, getSearchBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/",getFreeBook)

router.get("/book", getBook);
router.get("/search", getSearchBook);
export default router;
