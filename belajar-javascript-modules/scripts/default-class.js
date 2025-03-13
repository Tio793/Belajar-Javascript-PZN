export default class{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.info(`Hello My Name Is ${this.name}`)
    }
}