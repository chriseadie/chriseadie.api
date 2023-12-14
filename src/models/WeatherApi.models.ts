
export class WeatherResponse{
    public id:number;
    public description:string;

    constructor({id,description}:WeatherResponse){
        this.id = id,
        this.description = description
    }
}