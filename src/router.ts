import { Router } from "express";
import weatherRoute from "./controllers/weather.controller";

var route = Router();

route.use('/weather',weatherRoute)

export default route;