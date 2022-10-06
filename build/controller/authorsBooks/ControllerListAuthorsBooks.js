"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListAuthorsBooksDAO_1 = __importDefault(require("../../daos/authorsBooks/ListAuthorsBooksDAO"));
const ListAuthorsBooksSQL_1 = require("../../repository/authorsBooks/ListAuthorsBooksSQL");
class ControllerListAuthorsBooks extends ListAuthorsBooksDAO_1.default {
    bringAuthorsBooks(req, res) {
        ControllerListAuthorsBooks.getAuthorsBooks(ListAuthorsBooksSQL_1.SQL_LIST_AUTHORS_BOOKS.LIST, [], res);
    }
}
const controllerListAuthorsBooks = new ControllerListAuthorsBooks();
exports.default = controllerListAuthorsBooks;
