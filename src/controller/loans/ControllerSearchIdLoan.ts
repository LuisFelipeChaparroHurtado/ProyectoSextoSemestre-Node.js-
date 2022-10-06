import { Request, Response } from "express";
import SearchIdLoanDAO from "../../daos/loans/SearchIdLoanDAO";
import { SQL_SEARCH_ID_LOAN } from "../../repository/loans/SearchIdLoanDAO";

class ControllerSearchIdLoan extends SearchIdLoanDAO{
    public searchIdLoan(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchIdLoan.findByIdLoan(SQL_SEARCH_ID_LOAN.CARGAR, parameter, res);
    }
}


const controllerSearchIdLoan = new ControllerSearchIdLoan();
export default controllerSearchIdLoan;