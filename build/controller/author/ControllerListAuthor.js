"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListAuthorDAO_1 = __importDefault(require("../../daos/author/ListAuthorDAO"));
const ListAuthorSQL_1 = require("../../repository/author/ListAuthorSQL");
class ControllerListAuthor extends ListAuthorDAO_1.default {
    bringAuthor(req, res) {
        ControllerListAuthor.getAuthor(ListAuthorSQL_1.SQL_LIST_AUTHOR.LIST, [], res);
    }
}
const controllerListAuthor = new ControllerListAuthor();
exports.default = controllerListAuthor;
