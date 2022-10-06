"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateAuthorsBooksDAO_1 = __importDefault(require("../../daos/authorsBooks/UpdateAuthorsBooksDAO"));
const UpdateAuthorsBooksSQL_1 = require("../../repository/authorsBooks/UpdateAuthorsBooksSQL");
class ControllerUpdateAuthorsBooks extends UpdateAuthorsBooksDAO_1.default {
    updateAuthorsBooks(req, res) {
        const idAB = req.body.id_authors_books;
        const bookAB = req.body.fk_book;
        const authorAB = req.body.fk_author;
        const parameter = [idAB, bookAB, authorAB];
        ControllerUpdateAuthorsBooks.updateAuthorsBooks(UpdateAuthorsBooksSQL_1.SQL_UPDATE_AUTHORS_BOOKS.UPDATE, parameter, res);
    }
}
const controllerUpdateAuthorsBooks = new ControllerUpdateAuthorsBooks();
exports.default = controllerUpdateAuthorsBooks;
