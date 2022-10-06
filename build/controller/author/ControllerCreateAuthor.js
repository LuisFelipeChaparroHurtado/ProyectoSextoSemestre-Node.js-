"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateAuthorDAO_1 = __importDefault(require("../../daos/author/CreateAuthorDAO"));
const CreateAuthorSQL_1 = require("../../repository/author/CreateAuthorSQL");
class ControllerCreateAuthor extends CreateAuthorDAO_1.default {
    recordAuthor(req, res) {
        const nameA = req.body.nameAuthor;
        const surnameA = req.body.surnameAuthor;
        const nationalityA = req.body.nationalityAuthor;
        const descriptionA = req.body.descriptionAuthor;
        const parameter = [nameA, surnameA, nationalityA, descriptionA];
        ControllerCreateAuthor.createAuthor(CreateAuthorSQL_1.SQL_CREATE_AUTHOR.CONFIRM, CreateAuthorSQL_1.SQL_CREATE_AUTHOR.CREATE, parameter, res);
    }
}
const controllerCreateAuthor = new ControllerCreateAuthor();
exports.default = controllerCreateAuthor;
