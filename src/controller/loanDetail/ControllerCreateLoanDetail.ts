import { Request, Response } from "express";
import CreateLoanDetailDAO from "../../daos/loanDetail/CreateLoanDetailDAO";
import { SQL_CREATE_LOANDETAIL } from "../../repository/loanDetail/CreateLoanDetailSQL";

class ControllerCreateLoanDetail extends CreateLoanDetailDAO{
    public recordLoanDetail(req: Request, res:Response):void{
        const returnDate = req.body.returnDate;
        const daysA = req.body.daysArrears;
        const descri = req.body.description;
        const delibery = req.body.deliveryDate;
        const fkBooks = req.body.fkBook;
        const fkLoans = req.body.fkLoans;
        const parameter = [returnDate, daysA, descri, delibery,fkBooks,fkLoans];
        ControllerCreateLoanDetail.createLoanDetail(SQL_CREATE_LOANDETAIL.CONFIRM_BOOK, SQL_CREATE_LOANDETAIL.CREATE, parameter, res);
    }
}


const controllerCreateLoanDetail = new ControllerCreateLoanDetail();
export default controllerCreateLoanDetail;