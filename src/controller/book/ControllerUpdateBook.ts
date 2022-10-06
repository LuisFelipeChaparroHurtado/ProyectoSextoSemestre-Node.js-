import { Request, Response } from "express";
import UpdateBookDAO from "../../daos/book/UpdateBookDAO";
import { SQL_UPDATE_BOOK } from "../../repository/book/UpdateBookSQL";

class ControllerUpdateBook extends UpdateBookDAO{
    public updateBook(req: Request, res:Response):void{
        const id = req.body.idBook;
        const title = req.body.titleBook;
        const date = req.body.datePublication;
        const code = req.body.codeBook;
        const isbn = req.body.isbnBook;
        const publisher = req.body.fkPublisher;
        const parameter = [id, title, date, code, isbn, publisher];
        ControllerUpdateBook.updateBook(SQL_UPDATE_BOOK.UPDATE, parameter, res);
    }
}


const controllerUpdateBook = new ControllerUpdateBook();
export default controllerUpdateBook;