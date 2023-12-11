//named function
function add(num1 : number, num2 : number) : number{
    return num1 + num2
}
let a=add(10,20);
console.log(a)

//arrow function
const sub =(num1:number, num2:number):number => num1-num2;
console.log(sub(2,3));

//function expression
const mult = function(num1:number,num2:number):number{
    return num1*num2;
};

//named function with option parameters
function newAdd(num1 : number, num2 : number, num3?:number) : number{
    return num3? num1 + num2 + num3: num1 + num2;
}

//arrow function with requiired parameters
const newSub =(num1:number, num2:number, num3=10):number => num1-num2;

//named function with rest parameters
function add2(num1:number,num2:number, ...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=>a+b,0);
}
let numbers = [5,6,7]
console.log(add2(2,3,...numbers));



//Generic functions
// the <Type> gets any type of data we will passing through an function
function getItem<Type>(item:Type[]):Type[]{
    return new Array<Type>().concat(item);
}
let concatResult = getItem<number>([1,2,3,4]);

let concatString = getItem<string>(['a','b','c','d']);

console.log(concatResult)
console.log(concatString)