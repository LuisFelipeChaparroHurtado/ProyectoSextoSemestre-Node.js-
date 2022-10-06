import { Request, Response } from "express";
import DeletePublisherDAO from "../../daos/publisher/DeletePublisherDAO";
import { SQL_DELETE_PUBLISHER } from "../../repository/publisher/DeletePublisherSQL";

class ControllerDeletePublisher extends DeletePublisherDAO{

    public deletePublisher(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerDeletePublisher.deleteByIdPublisher(SQL_DELETE_PUBLISHER.BORRAR, parameter, res);
    }
}


const controllerDeletePublisher = new ControllerDeletePublisher();
export default controllerDeletePublisher;