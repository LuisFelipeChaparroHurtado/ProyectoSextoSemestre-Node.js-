"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListPublisherDAO_1 = __importDefault(require("../../daos/publisher/ListPublisherDAO"));
const ListPublisherSQL_1 = require("../../repository/publisher/ListPublisherSQL");
class ControllerListPublisher extends ListPublisherDAO_1.default {
    bringPublisher(req, res) {
        ControllerListPublisher.getPublisher(ListPublisherSQL_1.SQL_LIST_PUBLISHER.LIST, [], res);
    }
}
const controllerListPublisher = new ControllerListPublisher();
exports.default = controllerListPublisher;
