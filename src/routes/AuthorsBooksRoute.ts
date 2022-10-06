import {Router} from 'express';
import createAuthorsBooksController from '../controller/authorsBooks/ControllerCreateAuthorsBooks';
import deleteAuthorsBooksController from '../controller/authorsBooks/ControllerDeleteAuthorsBooks';
import listAuthorsBooksController from '../controller/authorsBooks/ControllerListAuthorsBooks';
import searchAuthorsBooksController from '../controller/authorsBooks/ControllerSearchAuthorsBooks';
import updateAuthorsBooksController from '../controller/authorsBooks/ControllerUpdateAuthorsBooks';

class AuthorsBooksRoute{

    public routeAuthorsBooksApi: Router;
    constructor(){
        this.routeAuthorsBooksApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.routeAuthorsBooksApi.get('/listAuthorsBooks', listAuthorsBooksController.bringAuthorsBooks);
        this.routeAuthorsBooksApi.post('/createAuthorsBooks', createAuthorsBooksController.recordAuthorsBooks);
        this.routeAuthorsBooksApi.get('/searchAuthorsBooks/:elcodigo', searchAuthorsBooksController.searchAuthor);
        this.routeAuthorsBooksApi.delete('/deleteAuthorsBooks/:elcodigo', deleteAuthorsBooksController.deleteAuthorsBooks);
        this.routeAuthorsBooksApi.put('/updateAuthorsBooks', updateAuthorsBooksController.updateAuthorsBooks);
    }
}

const authorsBooksRoute = new AuthorsBooksRoute();
export default authorsBooksRoute.routeAuthorsBooksApi;