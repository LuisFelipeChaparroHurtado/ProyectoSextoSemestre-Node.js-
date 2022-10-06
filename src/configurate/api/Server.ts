import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import routeAuthorApi from '../../routes/AuthorRoute';
import routeAuthorsBooksApi from '../../routes/AuthorsBooksRoute';
import routeBookApi from '../../routes/BookRoute';
import routeCustomerApi from '../../routes/CustomerRoute';
import routeLoanDetailApi from '../../routes/LoanDetailRoute';
import routeLoanApi from '../../routes/LoanRoute';
import routePublisherApi from '../../routes/PublisherRoute';



class Servidor {
    public app: express.Application;


    constructor() {
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();

    }
    public iniciarConfiguracion(): void {
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true }));


    }
    public activarRutas(): void {
        this.app.use('/api/author', routeAuthorApi);
        this.app.use('/api/authorsBooks', routeAuthorsBooksApi);
        this.app.use('/api/book', routeBookApi);
        this.app.use('/api/customer', routeCustomerApi);
        this.app.use('/api/loanDetail', routeLoanDetailApi);
        this.app.use('/api/loans', routeLoanApi);
        this.app.use('/api/publisher', routePublisherApi);
    }
    public iniciarServidor(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!',
                this.app.get('PORT'));
        });
    }
}
export default Servidor;