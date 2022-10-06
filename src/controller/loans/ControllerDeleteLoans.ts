import { Request, Response } from "express";
import DeleteLoansDAO from "../../daos/loans/DeleteLoansDAO";
import { SQL_DELETE_LOAN } from "../../repository/loans/DeleteLoansSQL";

class ControllerDeleteLoan extends DeleteLoansDAO{

    public deleteLoan(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteLoan.deleteByIdLoans(SQL_DELETE_LOAN.BORRAR, parameter, res);
    }
}


const controllerDeleteLoan = new ControllerDeleteLoan();
export default controllerDeleteLoan;