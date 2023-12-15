import { Router } from "express";
import weatherRoute from "./controllers/weather.controller";
import omdbRoute from './controllers/omdb.controller'

var route = Router();

route.use('/weather',weatherRoute);
route.use('/omdb',omdbRoute)

export default route;