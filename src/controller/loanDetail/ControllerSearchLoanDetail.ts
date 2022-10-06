import { Request, Response } from "express";
import SearchLoanDetailDAO from "../../daos/loanDetail/SearchLoanDetailDAO";
import { SQL_SEARCH_LOANDETAIL } from "../../repository/loanDetail/SearchLoanDetailSQL";

class ControllerSearchLoanDetail extends SearchLoanDetailDAO{
    public searchLoanDetail(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchLoanDetail.findByIdLoanDetail(SQL_SEARCH_LOANDETAIL.CARGAR, parameter, res);
    }
}


const controllerSearchLoanDetail = new ControllerSearchLoanDetail();
export default controllerSearchLoanDetail;