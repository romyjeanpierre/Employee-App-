// we can print stuff to the console
console.log('script is running!!!')

// this is a comment
/**
 * this
 * is
 * a
 * multi
 * line
 * comment
 */

// ===== Variables ==========

var myVariables = "some value"; // string

let num1 = 11; // number (int)

const PI = 3.14; //number (decimal)

let isAdult = true; // boolean

let roomNumber = "205"; //string 

let someVar = 'hello world'; //string

let carMileage = 35657; //number

let _favFood = 'pizza';  //string 

var var2; //undefined

console.log(myVariables);
console.log(num1);
console.log(isAdult);
console.log(var2)

// global variable 
var globalVariable = "you can access from anywhere";
let message = "hello!"

if (true) {
    // block Scope
var globalVariable = "new value";
let message = "hello again!"
console.log(message);
}

console.log(globalVariable);
console.log(message);

// global scope
let x =10;
let total = 400; // declaration
total = 600; //new value

{
    //block scope
    let x = 100;
    let y = 200;
    console.log(x);
    console.log(total + 100)
}

console.log(x);


const result = 90;


//literals

let age = 42
console.log (42);


// ===type of keyword

let msg = "hello JS"
let grade = 85;
let ip = 192.168;
let someVar1;
someVar1 = "bye";

let otherVar = null; //typeof will be object 


console.log(typeof msg);
console.log(typeof grade);
console.log(typeof ip);
console.log(typeof true);
console.log(typeof false);
console.log(typeof someVar1);
console.log(typeof otherVar);



