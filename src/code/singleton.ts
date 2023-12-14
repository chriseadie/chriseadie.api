
class Singleton {

    private state:Map<string,any>;
    constructor(){
        this.state = new Map();
    }

    addService<T>(key:string,value:T):Singleton {
        this.state.set(key,value);
        return this;
    }

    getService<T>(key:string):T {
        return this.state.get(key);
    }

    hasService(key:string):boolean{
        return this.state.has(key);
    }
}

export default new Singleton()