import { Request, Response } from "express";
import SearchBooksDAO from "../../daos/book/SearchBookDAO";
import { SQL_SEARCH_BOOKS } from "../../repository/book/SearchBookSQL";

class ControllerSearchBook extends SearchBooksDAO{
    public searchBook(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchBook.findByIdBook(SQL_SEARCH_BOOKS.CARGAR, parameter, res);
    }
}


const controllerSearchBook = new ControllerSearchBook();
export default controllerSearchBook;