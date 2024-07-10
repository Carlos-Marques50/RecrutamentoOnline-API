import { Router } from "express";
import RouteUser from "./RouteUser";
import RouteCandidate from "./RouteCandidate";
import RouteVacancy from "./RouteVancy";
import RouteApplication from "./RouteApplication";
const RouteMain = Router();

RouteMain.use("/users", RouteUser);
RouteMain.use("/candidates", RouteCandidate);
RouteMain.use("/vacancy", RouteVacancy);
RouteMain.use("/applications", RouteApplication);


export default RouteMain;
