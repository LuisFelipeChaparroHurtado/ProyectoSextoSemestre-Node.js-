import { Request, Response } from "express";
import ListAuthorsBooksDAO from "../../daos/authorsBooks/ListAuthorsBooksDAO";
import { SQL_LIST_AUTHORS_BOOKS } from "../../repository/authorsBooks/ListAuthorsBooksSQL";

class ControllerListAuthorsBooks extends ListAuthorsBooksDAO{
    public bringAuthorsBooks(req: Request, res:Response):void{
        ControllerListAuthorsBooks.getAuthorsBooks(SQL_LIST_AUTHORS_BOOKS.LIST, [],res);
    }
}
const controllerListAuthorsBooks = new ControllerListAuthorsBooks();
export default controllerListAuthorsBooks;