"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateAuthorsBooksDAO_1 = __importDefault(require("../../daos/authorsBooks/CreateAuthorsBooksDAO"));
const CreateAuthorsBooksSQL_1 = require("../../repository/authorsBooks/CreateAuthorsBooksSQL");
class ControllerCreateAuthorsBooks extends CreateAuthorsBooksDAO_1.default {
    recordAuthorsBooks(req, res) {
        const bookAB = req.body.fkBook;
        const authorAB = req.body.fkAuthor;
        const parameter = [bookAB, authorAB];
        ControllerCreateAuthorsBooks.createAuthorsBooks(CreateAuthorsBooksSQL_1.SQL_CREATE_AUTHORS_BOOKS.CONFIRM_BOOK, CreateAuthorsBooksSQL_1.SQL_CREATE_AUTHORS_BOOKS.CONFIRM_AUTHOR, CreateAuthorsBooksSQL_1.SQL_CREATE_AUTHORS_BOOKS.CREATE, parameter, res);
    }
}
const controllerCreateAuthorsBooks = new ControllerCreateAuthorsBooks();
exports.default = controllerCreateAuthorsBooks;
