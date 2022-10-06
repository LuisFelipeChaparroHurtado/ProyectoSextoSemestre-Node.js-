"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchIdLoanDetailDAO_1 = __importDefault(require("../../daos/loanDetail/SearchIdLoanDetailDAO"));
const SearchIdLoanDetailSQL_1 = require("../../repository/loanDetail/SearchIdLoanDetailSQL");
class ControllerSearchIdLoanDetail extends SearchIdLoanDetailDAO_1.default {
    searchIdLoanDetail(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchIdLoanDetail.findByIdLoanDetail(SearchIdLoanDetailSQL_1.SQL_SEARCH_ID_LOANDETAIL.CARGAR, parameter, res);
    }
}
const controllerSearchIdLoanDetail = new ControllerSearchIdLoanDetail();
exports.default = controllerSearchIdLoanDetail;
