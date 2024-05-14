import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from 'typeorm-extension';
import 'dotenv/config';

const port = process.env.DB_PORT as unknown as number | undefined;

const option: DataSourceOptions & SeederOptions  = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/**/entity/*.ts`],
  migrations: [`${__dirname}/**/gateways/DataBase/migrations/*.ts`],
  subscribers: [],
};

export const AppDataSource = new DataSource(option);
