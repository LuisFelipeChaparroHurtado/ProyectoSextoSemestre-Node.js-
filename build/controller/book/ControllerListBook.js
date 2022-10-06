"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListBookDAO_1 = __importDefault(require("../../daos/book/ListBookDAO"));
const ListBookSQL_1 = require("../../repository/book/ListBookSQL");
class ControllerListBooks extends ListBookDAO_1.default {
    bringBooks(req, res) {
        ControllerListBooks.getBook(ListBookSQL_1.SQL_LIST_BOOKS.LIST, [], res);
    }
}
const controllerListBooks = new ControllerListBooks();
exports.default = controllerListBooks;
