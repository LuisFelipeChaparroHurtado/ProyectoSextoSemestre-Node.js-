import { Request, Response } from "express";
import UpdateLoansDAO from "../../daos/loans/UpdateLoansDAO";
import { SQL_UPDATE_LOANS } from "../../repository/loans/UpdateLoansSQL";

class ControllerUpdateLoans extends UpdateLoansDAO{
    public updateLoans(req: Request, res:Response):void{
        const idLoan = req.body.idLoan;
        const startDate = req.body.startDateLoan;
        const descr = req.body.description;
        const fkCust = req.body.fkCustomer;
        const parameter = [idLoan, startDate,descr,fkCust];
        ControllerUpdateLoans.updateLoans(SQL_UPDATE_LOANS.UPDATE, parameter, res);
    }
}


const controllerUpdateLoans = new ControllerUpdateLoans();
export default controllerUpdateLoans;