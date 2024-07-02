import { Router } from "express";
import RouteUser from "./RouteUser";
import RouteCandidate from "./RouteCandidate";

const RouteMain = Router();

RouteMain.use("/users", RouteUser);
RouteMain.use("/candidates", RouteCandidate);


export default RouteMain;
