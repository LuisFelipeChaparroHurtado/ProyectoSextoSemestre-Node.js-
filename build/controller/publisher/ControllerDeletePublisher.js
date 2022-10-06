"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeletePublisherDAO_1 = __importDefault(require("../../daos/publisher/DeletePublisherDAO"));
const DeletePublisherSQL_1 = require("../../repository/publisher/DeletePublisherSQL");
class ControllerDeletePublisher extends DeletePublisherDAO_1.default {
    deletePublisher(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeletePublisher.deleteByIdPublisher(DeletePublisherSQL_1.SQL_DELETE_PUBLISHER.BORRAR, parameter, res);
    }
}
const controllerDeletePublisher = new ControllerDeletePublisher();
exports.default = controllerDeletePublisher;
