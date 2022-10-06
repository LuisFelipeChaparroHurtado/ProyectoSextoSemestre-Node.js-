"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchIdBookDAO_1 = __importDefault(require("../../daos/publisher/SearchIdBookDAO"));
const SearchIdBookSQL_1 = require("../../repository/publisher/SearchIdBookSQL");
class ControllerSearchIdBook extends SearchIdBookDAO_1.default {
    searchIdBook(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchIdBook.findByIdBook(SearchIdBookSQL_1.SQL_SEARCH_ID_BOOK.CARGAR, parameter, res);
    }
}
const controllerSearchIdBook = new ControllerSearchIdBook();
exports.default = controllerSearchIdBook;
