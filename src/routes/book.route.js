const express = require('express');
const router = express.Router();
const BookController=require('../controllers/book.controller')

console.log(BookController.createBook)

router
    .route('/')
    .post(BookController.createBook)
    .get(BookController.getBooks);


module.exports = router;
