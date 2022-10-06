"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCreatePublisher_1 = __importDefault(require("../controller/publisher/ControllerCreatePublisher"));
const ControllerDeletePublisher_1 = __importDefault(require("../controller/publisher/ControllerDeletePublisher"));
const ControllerListPublisher_1 = __importDefault(require("../controller/publisher/ControllerListPublisher"));
const ControllerSearchPublisher_1 = __importDefault(require("../controller/publisher/ControllerSearchPublisher"));
const ControllerUpdatePublisher_1 = __importDefault(require("../controller/publisher/ControllerUpdatePublisher"));
class PublisherRoute {
    constructor() {
        this.routePublisherApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routePublisherApi.get('/listPublisher', ControllerListPublisher_1.default.bringPublisher);
        this.routePublisherApi.post('/createPublisher', ControllerCreatePublisher_1.default.recordPublisher);
        this.routePublisherApi.get('/searchPublisher/:elcodigo', ControllerSearchPublisher_1.default.searchPublisher);
        this.routePublisherApi.put('/updatePublisher', ControllerUpdatePublisher_1.default.updatePublisher);
        this.routePublisherApi.delete('/deletePublisher/:elcodigo', ControllerDeletePublisher_1.default.deletePublisher);
    }
}
const publisherRoute = new PublisherRoute();
exports.default = publisherRoute.routePublisherApi;
