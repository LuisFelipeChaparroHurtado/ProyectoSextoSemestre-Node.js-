import pgPromise from "pg-promise";
import { IClient } from "pg-promise/typescript/pg-subset";
import { camelizeColumns } from "./functionConnection";

export const optionsPG: pgPromise.IInitOptions<IClient> ={
    receive(data, result, e){ camelizeColumns(data);}
};