import {Router} from 'express';
import createAuthorController from '../controller/author/ControllerCreateAuthor';
import deleteAuthorController from '../controller/author/ControllerDeleteAuthor';
import updateAuthorController from '../controller/author/ControllerUpdateAuthor';
import searchAuthorController from '../controller/author/ControllerSearchAuthor';
import listAuthorController from '../controller/author/ControllerListAuthor';

class AuthorRoute{

    public routeAuthorApi: Router;
    constructor(){
        this.routeAuthorApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routeAuthorApi.get('/listAuthor', listAuthorController.bringAuthor);
        this.routeAuthorApi.post('/createAuthor', createAuthorController.recordAuthor);
        this.routeAuthorApi.get('/searchAuthor/:elcodigo', searchAuthorController.searchAuthor);
        this.routeAuthorApi.delete('/deleteAuthor/:elcodigo', deleteAuthorController.deleteAuthor);
        this.routeAuthorApi.put('/updateAuthor', updateAuthorController.updateAuthor);
    }
}

const authorRoute = new AuthorRoute();
export default authorRoute.routeAuthorApi;