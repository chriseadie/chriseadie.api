import { Router } from "express";
import { generateExpiryTime, inject } from "../code/utils";
import { WeatherApi } from "../apis/weatherapi/weather.service";
import { WeatherResponse } from "../models/WeatherApi.models";
import singleton from "../code/singleton";
import { Constants } from "../code/constants";
import { CacheModel } from "../models/ApiModels";

var weatherRoute = Router();
const weatherService = inject(WeatherApi);


weatherRoute.get('/',async (req,res) => {

    if(singleton.hasService(Constants.WEATHER_CACHE)){
        const weatherCache = singleton.getService<CacheModel<WeatherResponse>>(Constants.WEATHER_CACHE);
        const date = new Date().getTime();
        if(date < weatherCache.expiryDate){
            res.send(weatherCache.data)
        }
    }

    try{
        const result = await weatherService.getCurrentWeather();

        let weather = result.data.weather[0];

        var weatherRes = new WeatherResponse({
            id:weather.id,
            description:weather.description
        });

        singleton.addService(Constants.WEATHER_CACHE,new CacheModel<WeatherResponse>({
            data:weatherRes,
            expiryDate:generateExpiryTime(2)
        }));

        return res.send(weatherRes);

    }catch(err){
        console.log(err)
        return res.status(500).send()
    }
})


export default weatherRoute