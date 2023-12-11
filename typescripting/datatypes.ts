let lname : String;
lname = "Taufique";
let newName= lname.toUpperCase();
console.log(newName)

//we are defining an variable wuth the types of number
let age : number;
age = 25;
age = 25.5;

let dob = "25";
let result = parseInt(dob);

let isValid : boolean =false;

console.log(isValid)

//if i want all the values will be string in this list
let emplist : string[];
//we cannot add any number to this list
//if we try add any number to this list it will throw an error
emplist=["santosh","abdul","imran"];

// this is known as generic this works same as above syntax
let deplist : Array<string>;

//we are creating an list of numbers which will getting only numbers values
let numlist : Array<number>;
numlist=[1,1.2,1.5,2,5,6,8];

let results = numlist.filter((num) => num >2);

let val = numlist.find((num) => num === 2);

console.log(results)
console.log(val)

let sum = numlist.reduce((num,acc) => num+acc);

console.log(sum)

let emp = emplist.find((emp) => emp==="imran");
console.log(emp)

const enum Color{
    Red,
    Blue,
    Green
}

let c : Color.Blue;

//tuples in typescript
let swapNumbs: [firstNumber:number,secondNumber:number];
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}

swapNumbs = swapNumbers(10,20);
console.log(swapNumbs[1])


