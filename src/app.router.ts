import { Router } from "express";
import ExampleRoute from "./routes/example.route";

class AppRouter{
    constructor(app: Router){
        new ExampleRoute(app);
    }
}

export default AppRouter;