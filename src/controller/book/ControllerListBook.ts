import { Request, Response } from "express";
import ListBooksDAO from "../../daos/book/ListBookDAO";
import { SQL_LIST_BOOKS } from "../../repository/book/ListBookSQL";

class ControllerListBooks extends ListBooksDAO{
    public bringBooks(req: Request, res:Response):void{
        ControllerListBooks.getBook(SQL_LIST_BOOKS.LIST, [],res);
    }
}
const controllerListBooks = new ControllerListBooks();
export default controllerListBooks;