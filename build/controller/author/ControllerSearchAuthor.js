"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchAuthorDAO_1 = __importDefault(require("../../daos/author/SearchAuthorDAO"));
const SearchAuthorSQL_1 = require("../../repository/author/SearchAuthorSQL");
class ControllerSearchAuthor extends SearchAuthorDAO_1.default {
    searchAuthor(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchAuthor.findByIdAuthor(SearchAuthorSQL_1.SQL_SEARCH_AUTHOR.CARGAR, parameter, res);
    }
}
const controllerSearchAuthor = new ControllerSearchAuthor();
exports.default = controllerSearchAuthor;
