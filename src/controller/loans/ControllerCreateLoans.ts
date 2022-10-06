import { Request, Response } from "express";
import CreateLoansDAO from "../../daos/loans/CreateLoansDAO";
import { SQL_CREATE_LOAN } from "../../repository/loans/CreateLoansSQL";

class ControllerCreateLoans extends CreateLoansDAO{
    public recordLoans(req: Request, res:Response):void{
        const startDate = req.body.startDateLoan;
        const descr = req.body.description;
        const fkCust = req.body.fkCustomer;
        const parameter = [startDate,descr,fkCust];
        ControllerCreateLoans.createLoans(SQL_CREATE_LOAN.CONFIRM, SQL_CREATE_LOAN.CREATE, parameter, res);
    }
}


const controllerCreateLoans = new ControllerCreateLoans();
export default controllerCreateLoans;