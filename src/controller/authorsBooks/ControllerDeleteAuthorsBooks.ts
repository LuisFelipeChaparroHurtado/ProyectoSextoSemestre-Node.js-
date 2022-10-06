import { Request, Response } from "express";
import DeleteAuthorsBooksDAO from "../../daos/authorsBooks/DeleteAuthorsBooksDAO";
import { SQL_DELETE_AUTHORS_BOOKS } from "../../repository/authorsBooks/DeleteAuthorsBooks";

class ControllerDeleteAuthorsBooks extends DeleteAuthorsBooksDAO{

    public deleteAuthorsBooks(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteAuthorsBooks.deleteByIdAuthorsBooks(SQL_DELETE_AUTHORS_BOOKS.BORRAR, parameter, res);
    }
}


const controllerDeleteAuthorsBooks = new ControllerDeleteAuthorsBooks();
export default controllerDeleteAuthorsBooks;