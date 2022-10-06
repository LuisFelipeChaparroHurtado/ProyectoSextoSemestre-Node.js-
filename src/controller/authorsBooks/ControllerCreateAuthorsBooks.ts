import { Request, Response } from "express";
import CreateAuthorsBooksDAO from "../../daos/authorsBooks/CreateAuthorsBooksDAO";
import { SQL_CREATE_AUTHOR } from "../../repository/author/CreateAuthorSQL";
import { SQL_CREATE_AUTHORS_BOOKS } from "../../repository/authorsBooks/CreateAuthorsBooksSQL";

class ControllerCreateAuthorsBooks extends CreateAuthorsBooksDAO{
    public recordAuthorsBooks(req: Request, res:Response):void{
        const bookAB = req.body.fkBook;
        const authorAB = req.body.fkAuthor;
        const parameter = [bookAB, authorAB];
        ControllerCreateAuthorsBooks.createAuthorsBooks(SQL_CREATE_AUTHORS_BOOKS.CONFIRM_BOOK, SQL_CREATE_AUTHORS_BOOKS.CONFIRM_AUTHOR, SQL_CREATE_AUTHORS_BOOKS.CREATE, parameter, res);
    }
}


const controllerCreateAuthorsBooks = new ControllerCreateAuthorsBooks();
export default controllerCreateAuthorsBooks;