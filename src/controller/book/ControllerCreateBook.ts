import { Request, Response } from "express";
import CreateBookDAO from "../../daos/book/CreateBookDAO";
import { SQL_CREATE_BOOK } from "../../repository/book/CreateBookSQL";

class ControllerCreateBook extends CreateBookDAO{
    public recordBook(req: Request, res:Response):void{
        const title = req.body.title_book;
        const date = req.body.date_publication;
        const code = req.body.code_book;
        const isbn = req.body.isbn_book;
        const publisher = req.body.fk_publisher;
        const parameter = [title, date, code, isbn, publisher];
        ControllerCreateBook.createBook(SQL_CREATE_BOOK.CONFIRM, SQL_CREATE_BOOK.CREATE, parameter, res);
    }
}


const controllerCreateBook = new ControllerCreateBook();
export default controllerCreateBook;