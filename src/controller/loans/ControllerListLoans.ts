import { Request, Response } from "express";
import ListLoansDAO from "../../daos/loans/ListLoansDAO";
import { SQL_LIST_LOANS } from "../../repository/loans/ListLoansSQL";

class ControllerListLoans extends ListLoansDAO{
    public bringLoans(req: Request, res:Response):void{
        ControllerListLoans.getLoans(SQL_LIST_LOANS.LIST, [],res);
    }
}
const controllerListLoans = new ControllerListLoans();
export default controllerListLoans;