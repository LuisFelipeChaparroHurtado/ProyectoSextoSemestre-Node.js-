"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCreateBook_1 = __importDefault(require("../controller/book/ControllerCreateBook"));
const ControllerListBook_1 = __importDefault(require("../controller/book/ControllerListBook"));
const ControllerSearchBook_1 = __importDefault(require("../controller/book/ControllerSearchBook"));
const ControllerUpdateBook_1 = __importDefault(require("../controller/book/ControllerUpdateBook"));
const ControllerDeleteBook_1 = __importDefault(require("../controller/book/ControllerDeleteBook"));
const ControllerSearchIdBook_1 = __importDefault(require("../controller/book/ControllerSearchIdBook"));
class BookRoute {
    constructor() {
        this.routeBookApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routeBookApi.get('/listBooks', ControllerListBook_1.default.bringBooks);
        this.routeBookApi.post('/createBook', ControllerCreateBook_1.default.recordBook);
        this.routeBookApi.get('/searchBook/:elcodigo', ControllerSearchBook_1.default.searchBook);
        this.routeBookApi.get('/searchIdBook/:elcodigo', ControllerSearchIdBook_1.default.searchIdBook);
        this.routeBookApi.put('/updateBook', ControllerUpdateBook_1.default.updateBook);
        this.routeBookApi.delete('/deleteBook/:elcodigo', ControllerDeleteBook_1.default.deleteBook);
    }
}
const bookRoute = new BookRoute();
exports.default = bookRoute.routeBookApi;
