import {Router} from 'express';
import createPublisherController from '../controller/publisher/ControllerCreatePublisher';
import deletePublisherController from '../controller/publisher/ControllerDeletePublisher';
import listPublisherController from '../controller/publisher/ControllerListPublisher';
import searchPublisherController from '../controller/publisher/ControllerSearchPublisher';
import updatePublisherController from '../controller/publisher/ControllerUpdatePublisher';
import searchIdBookController from '../controller/book/ControllerSearchIdBook';


class PublisherRoute{

    public routePublisherApi: Router;
    constructor(){
        this.routePublisherApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routePublisherApi.get('/listPublisher', listPublisherController.bringPublisher);
        this.routePublisherApi.post('/createPublisher', createPublisherController.recordPublisher);
        this.routePublisherApi.get('/searchPublisher/:elcodigo', searchPublisherController.searchPublisher);
        this.routePublisherApi.put('/updatePublisher', updatePublisherController.updatePublisher);
        this.routePublisherApi.delete('/deletePublisher/:elcodigo', deletePublisherController.deletePublisher);
    }
}

const publisherRoute = new PublisherRoute();
export default publisherRoute.routePublisherApi;