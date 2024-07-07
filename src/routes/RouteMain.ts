import { Router } from "express";
import RouteUser from "./RouteUser";
import RouteCandidate from "./RouteCandidate";
import RouteVacancy from "./RouteVancy";
const RouteMain = Router();

RouteMain.use("/users", RouteUser);
RouteMain.use("/candidates", RouteCandidate);
RouteMain.use("/vacancy", RouteVacancy);


export default RouteMain;
