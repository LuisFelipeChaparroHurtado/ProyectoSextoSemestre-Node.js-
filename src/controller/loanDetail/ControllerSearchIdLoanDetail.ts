import { Request, Response } from "express";
import SearchIdLoanDetailDAO from "../../daos/loanDetail/SearchIdLoanDetailDAO";
import { SQL_SEARCH_ID_LOANDETAIL } from "../../repository/loanDetail/SearchIdLoanDetailSQL";

class ControllerSearchIdLoanDetail extends SearchIdLoanDetailDAO{
    public searchIdLoanDetail(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchIdLoanDetail.findByIdLoanDetail(SQL_SEARCH_ID_LOANDETAIL.CARGAR, parameter, res);
    }
}


const controllerSearchIdLoanDetail = new ControllerSearchIdLoanDetail();
export default controllerSearchIdLoanDetail;