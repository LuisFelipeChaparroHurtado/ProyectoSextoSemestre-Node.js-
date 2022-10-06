"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCreateCustomer_1 = __importDefault(require("../controller/customer/ControllerCreateCustomer"));
const ControllerDeleteCustomer_1 = __importDefault(require("../controller/customer/ControllerDeleteCustomer"));
const ControllerListCustomer_1 = __importDefault(require("../controller/customer/ControllerListCustomer"));
const ControllerSearchCustomer_1 = __importDefault(require("../controller/customer/ControllerSearchCustomer"));
const ControllerUpdateCustomer_1 = __importDefault(require("../controller/customer/ControllerUpdateCustomer"));
class CustomerRoute {
    constructor() {
        this.routeCustomerApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routeCustomerApi.get('/listCustomer', ControllerListCustomer_1.default.bringCustomer);
        this.routeCustomerApi.post('/createCustomer', ControllerCreateCustomer_1.default.recordCustomer);
        this.routeCustomerApi.get('/searchCustomer/:elcodigo', ControllerSearchCustomer_1.default.searchCustomer);
        this.routeCustomerApi.put('/updateCustomer', ControllerUpdateCustomer_1.default.updateCustomer);
        this.routeCustomerApi.delete('/deleteCustomer/:elcodigo', ControllerDeleteCustomer_1.default.deleteCustomer);
    }
}
const customerRoute = new CustomerRoute();
exports.default = customerRoute.routeCustomerApi;
