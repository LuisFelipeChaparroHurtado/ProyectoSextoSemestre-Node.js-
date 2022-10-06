import { Request, Response } from "express";
import DeleteLoanDetailDAO from "../../daos/loanDetail/DeleteLoanDetailDAO";
import { SQL_DELETE_LOANDETAIL } from "../../repository/loanDetail/DeleteLoanDetailSQL";

class ControllerDeleteLoanDetail extends DeleteLoanDetailDAO{

    public deleteLoanDetail(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteLoanDetail.deleteByIdLoanDetail(SQL_DELETE_LOANDETAIL.BORRAR, parameter, res);
    }
}


const controllerDeleteLoanDetail = new ControllerDeleteLoanDetail();
export default controllerDeleteLoanDetail;