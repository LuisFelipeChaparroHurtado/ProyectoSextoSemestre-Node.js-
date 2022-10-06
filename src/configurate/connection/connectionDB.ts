import pgPromise from "pg-promise";
import { optionsPG } from "./optionConnection";
import variablesConnection from "../domains/var_database";

const pgp = pgPromise(optionsPG);
const pool = pgp(variablesConnection);

pool.connect()
.then((conn)=>{
    console.log('SUCCESSFUL CONNECTION!, CONNECTION TO ', variablesConnection.database);
    conn.done();
})
.catch((myErr)=>{
    console.log(myErr);
});

export default pool;