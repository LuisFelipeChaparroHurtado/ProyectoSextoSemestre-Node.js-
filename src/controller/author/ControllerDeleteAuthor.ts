import { Request, Response } from "express";
import DeleteAuthorDAO from "../../daos/author/DeleteAuthorDAO";
import { SQL_DELETE_AUTHOR } from "../../repository/author/DeleteAuthorSQL";

class ControllerDeleteAuthor extends DeleteAuthorDAO{

    public deleteAuthor(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeleteAuthor.deleteByIdAuthor(SQL_DELETE_AUTHOR.BORRAR, parameter, res);
    }
}


const controllerDeleteAuthor = new ControllerDeleteAuthor();
export default controllerDeleteAuthor;