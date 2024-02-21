const BookRepository=require('../repositories/BookRepository')
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const createBook = catchAsync(async (req, res) => {
    const book = await BookRepository.getInstance().create(req.body);
    res.status(httpStatus.CREATED).send(book);
});

const getBooks = catchAsync(async (req, res) => {
    const book = await BookRepository.getInstance().index();
    res.status(httpStatus.OK).send(book);
});



module.exports={
    createBook,
    getBooks
}