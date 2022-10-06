import { Request, Response } from "express";
import UpdateAuthorsBooksDAO from "../../daos/authorsBooks/UpdateAuthorsBooksDAO";
import { SQL_UPDATE_AUTHORS_BOOKS } from "../../repository/authorsBooks/UpdateAuthorsBooksSQL";

class ControllerUpdateAuthorsBooks extends UpdateAuthorsBooksDAO{

    public updateAuthorsBooks(req: Request, res:Response):void{
        const idAB = req.body.id_authors_books;
        const bookAB = req.body.fk_book;
        const authorAB = req.body.fk_author;
        const parameter = [idAB, bookAB, authorAB];
        ControllerUpdateAuthorsBooks.updateAuthorsBooks(SQL_UPDATE_AUTHORS_BOOKS.UPDATE, parameter, res);
    }
}


const controllerUpdateAuthorsBooks = new ControllerUpdateAuthorsBooks();
export default controllerUpdateAuthorsBooks;