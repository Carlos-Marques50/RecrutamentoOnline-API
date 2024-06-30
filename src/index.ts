import express = require("express");
import { AppDataSource } from "./data-source"
import RouteMain from "./routes/RouteMain";
import * as dotenv from 'dotenv';
import * as cors from "cors"

dotenv.config();

const corsOptions: cors.CorsOptions = {
    origin: '*', // Change this to specific allowed origins for better security
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};


const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(RouteMain);

const port = process.env.PORT

app.listen(port, async () => {
    console.log(`Servidor esta rodando na porta:${port}`);
});