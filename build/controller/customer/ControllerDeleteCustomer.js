"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteCustomerDAO_1 = __importDefault(require("../../daos/customer/DeleteCustomerDAO"));
const DeleteCustomerSQL_1 = require("../../repository/customer/DeleteCustomerSQL");
class ControllerDeleteCustomer extends DeleteCustomerDAO_1.default {
    deleteCustomer(req, res) {
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteCustomer.deleteByIdCustomer(DeleteCustomerSQL_1.SQL_DELETE_CUSTOMER.BORRAR, parameter, res);
    }
}
const controllerDeleteCustomer = new ControllerDeleteCustomer();
exports.default = controllerDeleteCustomer;
