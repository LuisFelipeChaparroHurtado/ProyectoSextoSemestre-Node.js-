"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchBookDAO_1 = __importDefault(require("../../daos/book/SearchBookDAO"));
const SearchBookSQL_1 = require("../../repository/book/SearchBookSQL");
class ControllerSearchBook extends SearchBookDAO_1.default {
    searchBook(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchBook.findByIdBook(SearchBookSQL_1.SQL_SEARCH_BOOKS.CARGAR, parameter, res);
    }
}
const controllerSearchBook = new ControllerSearchBook();
exports.default = controllerSearchBook;
