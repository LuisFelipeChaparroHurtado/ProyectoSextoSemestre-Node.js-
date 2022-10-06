"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchAuthorsBooksDAO_1 = __importDefault(require("../../daos/authorsBooks/SearchAuthorsBooksDAO"));
const SearchAuthorsBooksSQL_1 = require("../../repository/authorsBooks/SearchAuthorsBooksSQL");
class ControllerSearchAuthorsBooks extends SearchAuthorsBooksDAO_1.default {
    searchAuthor(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchAuthorsBooks.findByIdAuthorsBooks(SearchAuthorsBooksSQL_1.SQL_SEARCH_AUTHORS_BOOKS.CARGAR, parameter, res);
    }
}
const controllerSearchAuthorsBooks = new ControllerSearchAuthorsBooks();
exports.default = controllerSearchAuthorsBooks;
