//in typescript you can have default contsructor or parametrized constructor
class Employee{
    id: number;
    name :string;
    address: string;
    constructor(id:number, name:string, address:string){
        this.address = address;
        this.name=name;
        this.id=id;
    }
    //creating method for class
    getNamewithAddress():string{
        return `${this.name} stays at ${this.address}`;
    }
}

//creating instance of a class
let john = new Employee(1,'john','highways 71');

// john.id=1;
// john.name="John"
// john.address="Highway 71"
console.log(john)

//calling method
let address = john.getNamewithAddress()
console.log(address)
