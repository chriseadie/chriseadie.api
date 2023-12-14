
export class Response<T>{

    public data:T 

    constructor(data:T){
        this.data = data
    }
}

export class CacheModel<T> {
    public data:T;
    public expiryDate:number;

    constructor({data,expiryDate}:CacheModel<T>){}
}