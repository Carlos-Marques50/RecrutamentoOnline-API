import express = require("express");
import { AppDataSource } from "./data-source"
import RouteMain from "./routes/RouteMain";
import * as dotenv from 'dotenv';

dotenv.config();
const app= express();

app.use(RouteMain);
 
const port= process.env.PORT

app.listen(port, async ()=> {
    console.log(`Servidor esta rodando na porta:${port}`);
});