import { Request, Response } from "express";
import SearchPublisherDAO from "../../daos/publisher/SearchPublisherDAO";
import { SQL_SEARCH_PUBLISHER } from "../../repository/publisher/SearchPublisherSQL";

class ControllerSearchPublisher extends SearchPublisherDAO{
    public searchPublisher(req: Request, res:Response):void{
        const id = req.params.elcodigo;
        const parameter = [id];
        ControllerSearchPublisher.findByIdPublisher(SQL_SEARCH_PUBLISHER.CARGAR, parameter, res);
    }
}


const controllerSearchPublisher = new ControllerSearchPublisher();
export default controllerSearchPublisher;