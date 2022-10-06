"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteBookDAO_1 = __importDefault(require("../../daos/book/DeleteBookDAO"));
const DeleteBookSQL_1 = require("../../repository/book/DeleteBookSQL");
class ControllerDeleteBook extends DeleteBookDAO_1.default {
    deleteBook(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteBook.deleteByIdBook(DeleteBookSQL_1.SQL_DELETE_BOOK.BORRAR, parameter, res);
    }
}
const controllerDeleteBook = new ControllerDeleteBook();
exports.default = controllerDeleteBook;
