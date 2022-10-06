"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateCustomerDAO_1 = __importDefault(require("../../daos/customer/UpdateCustomerDAO"));
const UpdateCustomerSQL_1 = require("../../repository/customer/UpdateCustomerSQL");
class ControllerUpdateCustomer extends UpdateCustomerDAO_1.default {
    updateCustomer(req, res) {
        const id = req.body.idCustomer;
        const identification = req.body.customerIdentification;
        const name = req.body.nameCustomer;
        const surname = req.body.surnameCustomer;
        const address = req.body.customerAddress;
        const numberPhone = req.body.numberPhoneCustomer;
        const parameter = [id, identification, name, surname, address, numberPhone];
        ControllerUpdateCustomer.updateCustomer(UpdateCustomerSQL_1.SQL_UPDATE_CUSTOMER.UPDATE, parameter, res);
    }
}
const controllerUpdateCustomer = new ControllerUpdateCustomer();
exports.default = controllerUpdateCustomer;
