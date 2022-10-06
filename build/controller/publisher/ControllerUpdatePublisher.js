"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdatePublisherDAO_1 = __importDefault(require("../../daos/publisher/UpdatePublisherDAO"));
const UpdatePublisherSQL_1 = require("../../repository/publisher/UpdatePublisherSQL");
class ControllerUpdatePublisher extends UpdatePublisherDAO_1.default {
    updatePublisher(req, res) {
        const id = req.body.idPublisher;
        const name = req.body.namePublisher;
        const country = req.body.countryPublisher;
        const numberPhone = req.body.numberPhonePublisher;
        const parameter = [id, name, country, numberPhone];
        ControllerUpdatePublisher.updatePublisher(UpdatePublisherSQL_1.SQL_UPDATE_PUBLISHER.UPDATE, parameter, res);
    }
}
const controllerUpdatePublisher = new ControllerUpdatePublisher();
exports.default = controllerUpdatePublisher;
