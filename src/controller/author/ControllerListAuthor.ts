import { Request, Response } from "express";
import ListAuthorDAO from "../../daos/author/ListAuthorDAO";
import { SQL_LIST_AUTHOR } from "../../repository/author/ListAuthorSQL";

class ControllerListAuthor extends ListAuthorDAO{
    public bringAuthor(req: Request, res:Response):void{
        ControllerListAuthor.getAuthor(SQL_LIST_AUTHOR.LIST, [],res);
    }
}
const controllerListAuthor = new ControllerListAuthor();
export default controllerListAuthor;