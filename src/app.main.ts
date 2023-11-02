import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AppRouter from './app.router';
import { dataSource } from './app.data';

class AppMain {
    app: express.Application;

    constructor() {
        this.app = express();
        this.configuration();
        this.connectionDb();
        new AppRouter(this.app);
    }

    private configuration() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.text({ type: 'text/html' }));
        this.app.use(bodyParser.raw());
    }

    connectionDb() {
        dataSource.initialize()
            .then(() => {
                console.log("connect db");
            }).catch((err: Error) => {
                console.log(err);
            })
    }
}

export default new AppMain().app;