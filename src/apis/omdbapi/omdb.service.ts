import { IOMDB } from "../interfaces/omdb.interface";
import { Response } from "../../models/ApiModels";
import axios from "axios";


export class OMDBService implements IOMDB{

    #apiRoute = `https://www.omdbapi.com/?apikey=${process.env.OMDG_API_KEY}&`

    async searchMovie(name: string): Promise<Response<any>> {
        const result = await axios.get(`${this.#apiRoute}t=${name}&plot=full`)
        return new Response(result.data)
    }

}