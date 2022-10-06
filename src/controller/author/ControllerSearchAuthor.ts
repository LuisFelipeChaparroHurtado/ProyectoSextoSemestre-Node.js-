import { Request, Response } from "express";
import SearchAuthorDAO from "../../daos/author/SearchAuthorDAO";
import { SQL_SEARCH_AUTHOR } from "../../repository/author/SearchAuthorSQL";

class ControllerSearchAuthor extends SearchAuthorDAO{
    public searchAuthor(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchAuthor.findByIdAuthor(SQL_SEARCH_AUTHOR.CARGAR, parameter, res);
    }
}


const controllerSearchAuthor = new ControllerSearchAuthor();
export default controllerSearchAuthor;