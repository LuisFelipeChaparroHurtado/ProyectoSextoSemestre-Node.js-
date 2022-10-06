import { Request, Response } from "express";
import ListPublisherDAO from "../../daos/publisher/ListPublisherDAO";
import { SQL_LIST_PUBLISHER } from "../../repository/publisher/ListPublisherSQL";

class ControllerListPublisher extends ListPublisherDAO{
    public bringPublisher(req: Request, res:Response):void{
        ControllerListPublisher.getPublisher(SQL_LIST_PUBLISHER.LIST, [],res);
    }
}
const controllerListPublisher = new ControllerListPublisher();
export default controllerListPublisher;