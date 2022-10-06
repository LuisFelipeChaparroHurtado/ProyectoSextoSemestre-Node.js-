"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatePublisherDAO_1 = __importDefault(require("../../daos/publisher/CreatePublisherDAO"));
const CreatePublisherSQL_1 = require("../../repository/publisher/CreatePublisherSQL");
class ControllerCreatePublisher extends CreatePublisherDAO_1.default {
    recordPublisher(req, res) {
        const name = req.body.namePublisher;
        const country = req.body.countryPublisher;
        const numberPhone = req.body.numberPhonePublisher;
        const parameter = [name, country, numberPhone];
        ControllerCreatePublisher.createPublisher(CreatePublisherSQL_1.SQL_CREATE_PUBLISHER.CONFIRM, CreatePublisherSQL_1.SQL_CREATE_PUBLISHER.CREATE, parameter, res);
    }
}
const controllerCreatePublisher = new ControllerCreatePublisher();
exports.default = controllerCreatePublisher;
