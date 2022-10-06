import {Router} from 'express';
import createLoanDetailController from '../controller/loanDetail/ControllerCreateLoanDetail';
import deleteLoanDetailController from '../controller/loanDetail/ControllerDeleteLoanDetail';
import listLoanDetailController from '../controller/loanDetail/ControllerListLoanDetail';
import searchLoanDetailController from '../controller/loanDetail/ControllerSearchLoanDetail';
import searchBookIdLoanDetailController from '../controller/loanDetail/ControllerSearchIdLoanDetail';
import updateLoanDetailController from '../controller/loanDetail/ControllerUpdateLoanDetail';


class LoanDetailRoute{

    public routeLoanDetailApi: Router;
    constructor(){
        this.routeLoanDetailApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routeLoanDetailApi.get('/listLoanDetail', listLoanDetailController.bringLoanDetail);
        this.routeLoanDetailApi.post('/createLoanDetail', createLoanDetailController.recordLoanDetail);
        this.routeLoanDetailApi.get('/searchLoanDetail/:elcodigo', searchLoanDetailController.searchLoanDetail);
        this.routeLoanDetailApi.get('/searchIdLoanDetail/:elcodigo', searchBookIdLoanDetailController.searchIdLoanDetail);
        this.routeLoanDetailApi.put('/updateLoanDetail', updateLoanDetailController.updateLoanDetail);
        this.routeLoanDetailApi.delete('/deleteLoanDetail/:elcodigo', deleteLoanDetailController.deleteLoanDetail);
    }
}

const loanDetailRoute = new LoanDetailRoute();
export default loanDetailRoute.routeLoanDetailApi;