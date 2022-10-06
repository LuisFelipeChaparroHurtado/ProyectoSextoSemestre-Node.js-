"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCreateLoans_1 = __importDefault(require("../controller/loans/ControllerCreateLoans"));
const ControllerDeleteLoans_1 = __importDefault(require("../controller/loans/ControllerDeleteLoans"));
const ControllerListLoans_1 = __importDefault(require("../controller/loans/ControllerListLoans"));
const ControllerSearchLoans_1 = __importDefault(require("../controller/loans/ControllerSearchLoans"));
const ControllerUpdateLoans_1 = __importDefault(require("../controller/loans/ControllerUpdateLoans"));
const ControllerSearchIdLoan_1 = __importDefault(require("../controller/loans/ControllerSearchIdLoan"));
class LoanRoute {
    constructor() {
        this.routeLoansApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routeLoansApi.get('/listLoans', ControllerListLoans_1.default.bringLoans);
        this.routeLoansApi.post('/createLoan', ControllerCreateLoans_1.default.recordLoans);
        this.routeLoansApi.get('/searchLoan/:elcodigo', ControllerSearchLoans_1.default.searchLoan);
        this.routeLoansApi.get('/searchIdLoan/:elcodigo', ControllerSearchIdLoan_1.default.searchIdLoan);
        this.routeLoansApi.put('/updateLoan', ControllerUpdateLoans_1.default.updateLoans);
        this.routeLoansApi.delete('/deleteLoan/:elcodigo', ControllerDeleteLoans_1.default.deleteLoan);
    }
}
const loanRoute = new LoanRoute();
exports.default = loanRoute.routeLoansApi;
