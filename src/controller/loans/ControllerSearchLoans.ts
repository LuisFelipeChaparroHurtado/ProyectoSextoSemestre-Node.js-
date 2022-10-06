import { Request, Response } from "express";
import SearchLoanDAO from "../../daos/loans/SearchLoansDAO";
import { SQL_SEARCH_LOAN } from "../../repository/loans/SearchLoansSQL";

class ControllerSearchLoan extends SearchLoanDAO{
    public searchLoan(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchLoan.findByIdLoans(SQL_SEARCH_LOAN.CARGAR, parameter, res);
    }
}


const controllerSearchLoan = new ControllerSearchLoan();
export default controllerSearchLoan;