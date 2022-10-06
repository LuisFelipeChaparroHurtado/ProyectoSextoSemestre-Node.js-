"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const AuthorRoute_1 = __importDefault(require("../../routes/AuthorRoute"));
const AuthorsBooksRoute_1 = __importDefault(require("../../routes/AuthorsBooksRoute"));
const BookRoute_1 = __importDefault(require("../../routes/BookRoute"));
const CustomerRoute_1 = __importDefault(require("../../routes/CustomerRoute"));
const LoanDetailRoute_1 = __importDefault(require("../../routes/LoanDetailRoute"));
const LoanRoute_1 = __importDefault(require("../../routes/LoanRoute"));
const PublisherRoute_1 = __importDefault(require("../../routes/PublisherRoute"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use('/api/author', AuthorRoute_1.default);
        this.app.use('/api/authorsBooks', AuthorsBooksRoute_1.default);
        this.app.use('/api/book', BookRoute_1.default);
        this.app.use('/api/customer', CustomerRoute_1.default);
        this.app.use('/api/loanDetail', LoanDetailRoute_1.default);
        this.app.use('/api/loans', LoanRoute_1.default);
        this.app.use('/api/publisher', PublisherRoute_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
