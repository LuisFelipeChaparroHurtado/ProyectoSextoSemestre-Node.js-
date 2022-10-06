"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../configurate/connection/connectionDB"));
class CreateBookDAO {
    static createBook(sqlConfirm, sqlCreate, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirm, parametros);
                if (dato.amount == 0) {
                    //Crear registro
                    return yield consulta.one(sqlCreate, parametros);
                }
                else {
                    return { id_book: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_book != 0) {
                    res.status(200).json({ respuesta: 'Successful Book', nuevoCodigo: respuesta.id_book });
                }
                else {
                    res.status(402).json({ respuesta: "Error creating BOOK, probably repeated" });
                }
            })
                .catch((miErr) => {
                console.log("Error ", miErr);
                res.status(400).json({ respuesta: "Error in the query createBook" });
            });
        });
    }
}
exports.default = CreateBookDAO;
