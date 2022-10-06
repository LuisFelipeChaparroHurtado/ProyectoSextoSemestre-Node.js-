"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListCustomerDAO_1 = __importDefault(require("../../daos/customer/ListCustomerDAO"));
const ListCustomerSQL_1 = require("../../repository/customer/ListCustomerSQL");
class ControllerListCustomer extends ListCustomerDAO_1.default {
    bringCustomer(req, res) {
        ControllerListCustomer.getCustomer(ListCustomerSQL_1.SQL_LIST_CUSTOMER.LIST, [], res);
    }
}
const controllerListCustomer = new ControllerListCustomer();
exports.default = controllerListCustomer;
