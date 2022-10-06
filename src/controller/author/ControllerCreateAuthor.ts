import { Request, Response } from "express";
import CreateAuthorDAO from "../../daos/author/CreateAuthorDAO";
import { SQL_CREATE_AUTHOR } from "../../repository/author/CreateAuthorSQL";

class ControllerCreateAuthor extends CreateAuthorDAO{
    public recordAuthor(req: Request, res:Response):void{
        const nameA = req.body.nameAuthor;
        const surnameA = req.body.surnameAuthor;
        const nationalityA = req.body.nationalityAuthor;
        const descriptionA = req.body.descriptionAuthor;
        const parameter = [nameA, surnameA, nationalityA, descriptionA];
        ControllerCreateAuthor.createAuthor(SQL_CREATE_AUTHOR.CONFIRM, SQL_CREATE_AUTHOR.CREATE, parameter, res);
    }
}


const controllerCreateAuthor = new ControllerCreateAuthor();
export default controllerCreateAuthor;