"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCustomerDAO_1 = __importDefault(require("../../daos/customer/CreateCustomerDAO"));
const CreateCustomerSQL_1 = require("../../repository/customer/CreateCustomerSQL");
class ControllerCreateCustomer extends CreateCustomerDAO_1.default {
    recordCustomer(req, res) {
        const identification = req.body.customerIdentification;
        const name = req.body.nameCustomer;
        const surname = req.body.surnameCustomer;
        const address = req.body.customerAddress;
        const numberPhone = req.body.numberPhoneCustomer;
        const parameter = [identification, name, surname, address, numberPhone];
        ControllerCreateCustomer.createCustomer(CreateCustomerSQL_1.SQL_CREATE_CUSTOMER.CONFIRM, CreateCustomerSQL_1.SQL_CREATE_CUSTOMER.CREATE, parameter, res);
    }
}
const controllerCreateCustomer = new ControllerCreateCustomer();
exports.default = controllerCreateCustomer;
