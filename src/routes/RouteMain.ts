import { Router } from "express";
import RouteUser from "./RouteUser";
import RouteDataBI from "./Route.DataBI";

const RouteMain = Router();
RouteMain.use("/users", RouteUser);
RouteMain.use("/bi", RouteDataBI);

export default RouteMain;
