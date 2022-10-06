import { Request, Response } from "express";
import UpdateLoanDetailDAO from "../../daos/loanDetail/UpdateLoanDetailDAO";
import { SQL_UPDATE_LOANDETAIL } from "../../repository/loanDetail/UpdateLoanDetailSQL";

class ControllerUpdateLoanDetail extends UpdateLoanDetailDAO{
    public updateLoanDetail(req: Request, res:Response):void{
        const id= req.body.idLoanDetail
        const returnDate = req.body.returnDate;
        const daysA = req.body.daysArrears;
        const descri = req.body.description;
        const delibery = req.body.deliveryDate;
        const fkBooks = req.body.fkBook;
        const fkLoans = req.body.fkLoans;
        const parameter = [id, returnDate, daysA, descri, delibery,fkBooks,fkLoans];
        ControllerUpdateLoanDetail.updateLoanDetail(SQL_UPDATE_LOANDETAIL.UPDATE, parameter, res);
    }
}


const controllerUpdateLoanDetail = new ControllerUpdateLoanDetail();
export default controllerUpdateLoanDetail;