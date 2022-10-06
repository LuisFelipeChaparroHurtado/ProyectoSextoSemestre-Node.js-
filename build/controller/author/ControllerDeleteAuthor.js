"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteAuthorDAO_1 = __importDefault(require("../../daos/author/DeleteAuthorDAO"));
const DeleteAuthorSQL_1 = require("../../repository/author/DeleteAuthorSQL");
class ControllerDeleteAuthor extends DeleteAuthorDAO_1.default {
    deleteAuthor(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteAuthor.deleteByIdAuthor(DeleteAuthorSQL_1.SQL_DELETE_AUTHOR.BORRAR, parameter, res);
    }
}
const controllerDeleteAuthor = new ControllerDeleteAuthor();
exports.default = controllerDeleteAuthor;
