import { DataSource } from "typeorm";
import 'dotenv/config';
import { Example } from "./entities/example.entity";

const dataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB!),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    synchronize: true,
    logging: false,
    entities: [Example],
    subscribers: [],
    migrations: [],
    poolSize: 30000,
    entitySkipConstructor: false,
})

export {
    dataSource
}