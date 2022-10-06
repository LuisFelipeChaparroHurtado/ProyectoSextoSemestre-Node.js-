"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchLoanDetailDAO_1 = __importDefault(require("../../daos/loanDetail/SearchLoanDetailDAO"));
const SearchLoanDetailSQL_1 = require("../../repository/loanDetail/SearchLoanDetailSQL");
class ControllerSearchLoanDetail extends SearchLoanDetailDAO_1.default {
    searchLoanDetail(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchLoanDetail.findByIdLoanDetail(SearchLoanDetailSQL_1.SQL_SEARCH_LOANDETAIL.CARGAR, parameter, res);
    }
}
const controllerSearchLoanDetail = new ControllerSearchLoanDetail();
exports.default = controllerSearchLoanDetail;
