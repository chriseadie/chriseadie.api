import axios from "axios";
import { Response } from "../../models/ApiModels";
import { IWeatherApi } from "../interfaces/weatherapi.interface";

export class WeatherApi implements IWeatherApi{
    private apiKey = process.env.OPEN_WEATHER_API_KEY;
    private lat:string = "55.8554082";
    private lon:string = "-4.3152956";
    private apiRoot = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`

    constructor(){}

    async getCurrentWeather(): Promise<Response<any>> {
        const result = await axios.get(this.apiRoot);
        return new Response(result.data);
    }
}