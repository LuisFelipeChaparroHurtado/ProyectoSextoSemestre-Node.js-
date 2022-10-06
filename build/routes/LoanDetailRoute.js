"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCreateLoanDetail_1 = __importDefault(require("../controller/loanDetail/ControllerCreateLoanDetail"));
const ControllerDeleteLoanDetail_1 = __importDefault(require("../controller/loanDetail/ControllerDeleteLoanDetail"));
const ControllerListLoanDetail_1 = __importDefault(require("../controller/loanDetail/ControllerListLoanDetail"));
const ControllerSearchLoanDetail_1 = __importDefault(require("../controller/loanDetail/ControllerSearchLoanDetail"));
const ControllerSearchIdLoanDetail_1 = __importDefault(require("../controller/loanDetail/ControllerSearchIdLoanDetail"));
const ControllerUpdateLoanDetail_1 = __importDefault(require("../controller/loanDetail/ControllerUpdateLoanDetail"));
class LoanDetailRoute {
    constructor() {
        this.routeLoanDetailApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routeLoanDetailApi.get('/listLoanDetail', ControllerListLoanDetail_1.default.bringLoanDetail);
        this.routeLoanDetailApi.post('/createLoanDetail', ControllerCreateLoanDetail_1.default.recordLoanDetail);
        this.routeLoanDetailApi.get('/searchLoanDetail/:elcodigo', ControllerSearchLoanDetail_1.default.searchLoanDetail);
        this.routeLoanDetailApi.get('/searchIdLoanDetail/:elcodigo', ControllerSearchIdLoanDetail_1.default.searchIdLoanDetail);
        this.routeLoanDetailApi.put('/updateLoanDetail', ControllerUpdateLoanDetail_1.default.updateLoanDetail);
        this.routeLoanDetailApi.delete('/deleteLoanDetail/:elcodigo', ControllerDeleteLoanDetail_1.default.deleteLoanDetail);
    }
}
const loanDetailRoute = new LoanDetailRoute();
exports.default = loanDetailRoute.routeLoanDetailApi;
