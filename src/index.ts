import express = require("express");
import RouteMain from "./routes/RouteMain";
import * as dotenv from 'dotenv';
import * as cors from "cors"
import * as bcrypt from "bcrypt"
import * as path from "path"

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({
    //orign: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type']
}))

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(RouteMain);
const port = process.env.PORT

app.listen(port, async () => {
    console.log(bcrypt.hashSync('12345678', 8));
    
    console.log(`Servidor esta rodando na porta: ${ port }`);
});