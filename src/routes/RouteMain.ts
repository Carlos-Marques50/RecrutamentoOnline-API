import { Router } from "express";
import RouteUser from "./RouteUser";

const RouteMain = Router();
RouteMain.use("/users", RouteUser);

export default RouteMain;
