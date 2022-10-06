"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateBookDAO_1 = __importDefault(require("../../daos/book/UpdateBookDAO"));
const UpdateBookSQL_1 = require("../../repository/book/UpdateBookSQL");
class ControllerUpdateBook extends UpdateBookDAO_1.default {
    updateBook(req, res) {
        const id = req.body.idBook;
        const title = req.body.titleBook;
        const date = req.body.datePublication;
        const code = req.body.codeBook;
        const isbn = req.body.isbnBook;
        const publisher = req.body.fkPublisher;
        const parameter = [id, title, date, code, isbn, publisher];
        ControllerUpdateBook.updateBook(UpdateBookSQL_1.SQL_UPDATE_BOOK.UPDATE, parameter, res);
    }
}
const controllerUpdateBook = new ControllerUpdateBook();
exports.default = controllerUpdateBook;
