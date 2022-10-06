import { Request, Response } from "express";
import UpdateAuthorDAO from "../../daos/author/UpdateAuthorDAO";
import { SQL_UPDATE_AUTHOR } from "../../repository/author/UpdateAuthorSQL";

class ControllerUpdateAuthor extends UpdateAuthorDAO{

    public updateAuthor(req: Request, res:Response):void{
        const idA = req.body.idAuthor;
        const nameA = req.body.nameAuthor;
        const surnameA = req.body.surnameAuthor;
        const nationalityA = req.body.nationalityAuthor;
        const descriptionA = req.body.descriptionAuthor;
        const parameter = [idA, nameA, surnameA, nationalityA, descriptionA];
        ControllerUpdateAuthor.updateAuthor(SQL_UPDATE_AUTHOR.UPDATE, parameter, res);
    }
}


const controllerUpdateAuthor = new ControllerUpdateAuthor();
export default controllerUpdateAuthor;