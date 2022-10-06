"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCreateAuthorsBooks_1 = __importDefault(require("../controller/authorsBooks/ControllerCreateAuthorsBooks"));
const ControllerDeleteAuthorsBooks_1 = __importDefault(require("../controller/authorsBooks/ControllerDeleteAuthorsBooks"));
const ControllerListAuthorsBooks_1 = __importDefault(require("../controller/authorsBooks/ControllerListAuthorsBooks"));
const ControllerSearchAuthorsBooks_1 = __importDefault(require("../controller/authorsBooks/ControllerSearchAuthorsBooks"));
const ControllerUpdateAuthorsBooks_1 = __importDefault(require("../controller/authorsBooks/ControllerUpdateAuthorsBooks"));
class AuthorsBooksRoute {
    constructor() {
        this.routeAuthorsBooksApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routeAuthorsBooksApi.get('/listAuthorsBooks', ControllerListAuthorsBooks_1.default.bringAuthorsBooks);
        this.routeAuthorsBooksApi.post('/createAuthorsBooks', ControllerCreateAuthorsBooks_1.default.recordAuthorsBooks);
        this.routeAuthorsBooksApi.get('/searchAuthorsBooks/:elcodigo', ControllerSearchAuthorsBooks_1.default.searchAuthor);
        this.routeAuthorsBooksApi.delete('/deleteAuthorsBooks/:elcodigo', ControllerDeleteAuthorsBooks_1.default.deleteAuthorsBooks);
        this.routeAuthorsBooksApi.put('/updateAuthorsBooks', ControllerUpdateAuthorsBooks_1.default.updateAuthorsBooks);
    }
}
const authorsBooksRoute = new AuthorsBooksRoute();
exports.default = authorsBooksRoute.routeAuthorsBooksApi;
