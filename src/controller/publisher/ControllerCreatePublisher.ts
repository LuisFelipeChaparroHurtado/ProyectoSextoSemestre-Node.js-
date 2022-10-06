import { Request, Response } from "express";
import CreatePublisherDAO from "../../daos/publisher/CreatePublisherDAO";
import { SQL_CREATE_PUBLISHER } from "../../repository/publisher/CreatePublisherSQL";

class ControllerCreatePublisher extends CreatePublisherDAO{
    public recordPublisher(req: Request, res:Response):void{
        const name = req.body.namePublisher;
        const country = req.body.countryPublisher;
        const numberPhone = req.body.numberPhonePublisher;
        const parameter = [name,country,numberPhone];
        ControllerCreatePublisher.createPublisher(SQL_CREATE_PUBLISHER.CONFIRM, SQL_CREATE_PUBLISHER.CREATE, parameter, res);
    }
}


const controllerCreatePublisher = new ControllerCreatePublisher();
export default controllerCreatePublisher;