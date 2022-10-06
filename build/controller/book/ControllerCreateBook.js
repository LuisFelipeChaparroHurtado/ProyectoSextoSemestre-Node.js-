"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateBookDAO_1 = __importDefault(require("../../daos/book/CreateBookDAO"));
const CreateBookSQL_1 = require("../../repository/book/CreateBookSQL");
class ControllerCreateBook extends CreateBookDAO_1.default {
    recordBook(req, res) {
        const title = req.body.title_book;
        const date = req.body.date_publication;
        const code = req.body.code_book;
        const isbn = req.body.isbn_book;
        const publisher = req.body.fk_publisher;
        const parameter = [title, date, code, isbn, publisher];
        ControllerCreateBook.createBook(CreateBookSQL_1.SQL_CREATE_BOOK.CONFIRM, CreateBookSQL_1.SQL_CREATE_BOOK.CREATE, parameter, res);
    }
}
const controllerCreateBook = new ControllerCreateBook();
exports.default = controllerCreateBook;
