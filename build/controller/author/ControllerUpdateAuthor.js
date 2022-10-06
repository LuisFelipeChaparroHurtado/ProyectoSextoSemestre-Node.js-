"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateAuthorDAO_1 = __importDefault(require("../../daos/author/UpdateAuthorDAO"));
const UpdateAuthorSQL_1 = require("../../repository/author/UpdateAuthorSQL");
class ControllerUpdateAuthor extends UpdateAuthorDAO_1.default {
    updateAuthor(req, res) {
        const idA = req.body.idAuthor;
        const nameA = req.body.nameAuthor;
        const surnameA = req.body.surnameAuthor;
        const nationalityA = req.body.nationalityAuthor;
        const descriptionA = req.body.descriptionAuthor;
        const parameter = [idA, nameA, surnameA, nationalityA, descriptionA];
        ControllerUpdateAuthor.updateAuthor(UpdateAuthorSQL_1.SQL_UPDATE_AUTHOR.UPDATE, parameter, res);
    }
}
const controllerUpdateAuthor = new ControllerUpdateAuthor();
exports.default = controllerUpdateAuthor;
