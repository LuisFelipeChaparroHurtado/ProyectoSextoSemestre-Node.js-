import { Request, Response } from "express";
import UpdatePublisherDAO from "../../daos/publisher/UpdatePublisherDAO";
import { SQL_UPDATE_PUBLISHER } from "../../repository/publisher/UpdatePublisherSQL";

class ControllerUpdatePublisher extends UpdatePublisherDAO{
    public updatePublisher(req: Request, res:Response):void{
        const id= req.body.idPublisher;
        const name = req.body.namePublisher;
        const country = req.body.countryPublisher;
        const numberPhone = req.body.numberPhonePublisher;
        const parameter = [id,name,country,numberPhone];
        ControllerUpdatePublisher.updatePublisher(SQL_UPDATE_PUBLISHER.UPDATE, parameter, res);
    }
}


const controllerUpdatePublisher = new ControllerUpdatePublisher();
export default controllerUpdatePublisher;