import { Request, Response } from "express";
import SearchIdBookDAO from "../../daos/book/SearchIdBookDAO";
import { SQL_SEARCH_ID_BOOK } from "../../repository/book/SearchIdBookSQL";

class ControllerSearchIdBook extends SearchIdBookDAO{
    public searchIdBook(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchIdBook.findByIdBook(SQL_SEARCH_ID_BOOK.CARGAR, parameter, res);
    }
}


const controllerSearchIdBook = new ControllerSearchIdBook();
export default controllerSearchIdBook;