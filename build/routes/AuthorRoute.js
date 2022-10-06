"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCreateAuthor_1 = __importDefault(require("../controller/author/ControllerCreateAuthor"));
const ControllerDeleteAuthor_1 = __importDefault(require("../controller/author/ControllerDeleteAuthor"));
const ControllerUpdateAuthor_1 = __importDefault(require("../controller/author/ControllerUpdateAuthor"));
const ControllerSearchAuthor_1 = __importDefault(require("../controller/author/ControllerSearchAuthor"));
const ControllerListAuthor_1 = __importDefault(require("../controller/author/ControllerListAuthor"));
class AuthorRoute {
    constructor() {
        this.routeAuthorApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routeAuthorApi.get('/listAuthor', ControllerListAuthor_1.default.bringAuthor);
        this.routeAuthorApi.post('/createAuthor', ControllerCreateAuthor_1.default.recordAuthor);
        this.routeAuthorApi.get('/searchAuthor/:elcodigo', ControllerSearchAuthor_1.default.searchAuthor);
        this.routeAuthorApi.delete('/deleteAuthor/:elcodigo', ControllerDeleteAuthor_1.default.deleteAuthor);
        this.routeAuthorApi.put('/updateAuthor', ControllerUpdateAuthor_1.default.updateAuthor);
    }
}
const authorRoute = new AuthorRoute();
exports.default = authorRoute.routeAuthorApi;
