import { Router } from "express";
import { inject } from "../code/utils";
import { OMDBService } from "../apis/omdbapi/omdb.service";

var omdbRoute = Router();

var omdbService = inject(OMDBService)

omdbRoute.get("/:title",async (req,res) => {
    const param = req.params.title
    var result = await omdbService.searchMovie(param);
    res.send(result)
})


export default omdbRoute