"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchCustomerDAO_1 = __importDefault(require("../../daos/customer/SearchCustomerDAO"));
const SearchCustomerSQL_1 = require("../../repository/customer/SearchCustomerSQL");
class ControllerSearchCustomer extends SearchCustomerDAO_1.default {
    searchCustomer(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchCustomer.findByIdCustomer(SearchCustomerSQL_1.SQL_SEARCH_CUSTOMER.CARGAR, parameter, res);
    }
}
const controllerSearchCustomer = new ControllerSearchCustomer();
exports.default = controllerSearchCustomer;
