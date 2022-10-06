import { Request, Response } from "express";
import ListLoanDetailDAO from "../../daos/loanDetail/ListLoanDetailDAO";
import { SQL_LIST_LOANDETAIL } from "../../repository/loanDetail/ListLoanDetailSQL";

class ControllerListLoanDetail extends ListLoanDetailDAO{
    public bringLoanDetail(req: Request, res:Response):void{
        ControllerListLoanDetail.getLoanDetail(SQL_LIST_LOANDETAIL.LIST, [],res);
    }
}
const controllerListLoanDetail = new ControllerListLoanDetail();
export default controllerListLoanDetail;