import "reflect-metadata"
import { DataSource } from "typeorm"

const port= process.env.DB_PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.{ts, js}"],
    migrations: ["src/gateways/DataBase/migrations"],
    subscribers: [],
})
