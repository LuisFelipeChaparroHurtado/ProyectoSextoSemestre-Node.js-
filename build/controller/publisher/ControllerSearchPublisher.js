"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchPublisherDAO_1 = __importDefault(require("../../daos/publisher/SearchPublisherDAO"));
const SearchPublisherSQL_1 = require("../../repository/publisher/SearchPublisherSQL");
class ControllerSearchPublisher extends SearchPublisherDAO_1.default {
    searchPublisher(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchPublisher.findByIdPublisher(SearchPublisherSQL_1.SQL_SEARCH_PUBLISHER.CARGAR, parameter, res);
    }
}
const controllerSearchPublisher = new ControllerSearchPublisher();
exports.default = controllerSearchPublisher;
