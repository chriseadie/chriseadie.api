import { Newable } from "../types";
import singleton from "./singleton";



export function inject<T>(service:Newable<T>):T{
    if(singleton.hasService(service.name)){
        return singleton.getService(service.name)
    }
    var serviceInstance = new service();
    singleton.addService(service.name,serviceInstance)
    return serviceInstance;
}

export function generateExpiryTime(minutes:number):number {
    const date = new Date()
    return date.getTime() + minutes * 60000;
}