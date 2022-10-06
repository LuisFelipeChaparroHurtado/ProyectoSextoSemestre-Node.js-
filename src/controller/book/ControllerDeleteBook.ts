import { Request, Response } from "express";
import DeleteBookDAO from "../../daos/book/DeleteBookDAO";
import { SQL_DELETE_BOOK } from "../../repository/book/DeleteBookSQL";

class ControllerDeleteBook extends DeleteBookDAO{

    public deleteBook(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteBook.deleteByIdBook(SQL_DELETE_BOOK.BORRAR, parameter, res);
    }
}


const controllerDeleteBook = new ControllerDeleteBook();
export default controllerDeleteBook;