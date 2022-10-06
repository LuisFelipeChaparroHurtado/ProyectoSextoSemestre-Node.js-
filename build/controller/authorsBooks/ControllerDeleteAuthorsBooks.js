"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteAuthorsBooksDAO_1 = __importDefault(require("../../daos/authorsBooks/DeleteAuthorsBooksDAO"));
const DeleteAuthorsBooks_1 = require("../../repository/authorsBooks/DeleteAuthorsBooks");
class ControllerDeleteAuthorsBooks extends DeleteAuthorsBooksDAO_1.default {
    deleteAuthorsBooks(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteAuthorsBooks.deleteByIdAuthorsBooks(DeleteAuthorsBooks_1.SQL_DELETE_AUTHORS_BOOKS.BORRAR, parameter, res);
    }
}
const controllerDeleteAuthorsBooks = new ControllerDeleteAuthorsBooks();
exports.default = controllerDeleteAuthorsBooks;
