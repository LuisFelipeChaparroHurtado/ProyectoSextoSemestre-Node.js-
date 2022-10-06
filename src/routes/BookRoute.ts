import {Router} from 'express';
import createBookController from '../controller/book/ControllerCreateBook';
import listBookController from '../controller/book/ControllerListBook';
import searchBookController from '../controller/book/ControllerSearchBook';
import updateBookController from '../controller/book/ControllerUpdateBook';
import deleteBookController from '../controller/book/ControllerDeleteBook';
import searchPublisherIdBookController from '../controller/book/ControllerSearchIdBook';

class BookRoute{

    public routeBookApi: Router;
    constructor(){
        this.routeBookApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routeBookApi.get('/listBooks', listBookController.bringBooks);
        this.routeBookApi.post('/createBook', createBookController.recordBook);
        this.routeBookApi.get('/searchBook/:elcodigo', searchBookController.searchBook);
        this.routeBookApi.get('/searchIdBook/:elcodigo', searchPublisherIdBookController.searchIdBook);
        this.routeBookApi.put('/updateBook', updateBookController.updateBook);
        this.routeBookApi.delete('/deleteBook/:elcodigo', deleteBookController.deleteBook);
    }
}

const bookRoute = new BookRoute();
export default bookRoute.routeBookApi;