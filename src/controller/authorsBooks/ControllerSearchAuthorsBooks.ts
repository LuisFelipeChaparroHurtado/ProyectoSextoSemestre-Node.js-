import { Request, Response } from "express";
import SearchAuthorsBooksDAO from "../../daos/authorsBooks/SearchAuthorsBooksDAO";
import { SQL_SEARCH_AUTHORS_BOOKS } from "../../repository/authorsBooks/SearchAuthorsBooksSQL";

class ControllerSearchAuthorsBooks extends SearchAuthorsBooksDAO{
    public searchAuthor(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchAuthorsBooks.findByIdAuthorsBooks(SQL_SEARCH_AUTHORS_BOOKS.CARGAR, parameter, res);
    }
}


const controllerSearchAuthorsBooks = new ControllerSearchAuthorsBooks();
export default controllerSearchAuthorsBooks;