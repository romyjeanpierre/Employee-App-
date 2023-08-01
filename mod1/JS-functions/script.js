sayHello('Alex')

//*declare a function or function definition 

//regular function declaration 
function sayHello(name) {
    console.log(`Hello ${name}`);
}

// function expression
const sayBye = function(friend, pet) {
    console.log(`Good Bye my friend ${friend} and his pet ${pet}`);
}
sayBye('John');

console.log(typeof sayHello); 



let username = 'Clement'; 

//* call or execute the function 
sayHello('John'); // Passing the argument of the string 'John'
sayHello(username);
sayHello('Alex');
sayHello('mark');

sayBye('John', 'bolt'); 


//=====================

/*function add(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number")
    // or if(typeof num1 !=== "number" && typeof num2 !=== "number")
    {
    console.log('Arguments needs to be numbers');
} else{
console.log(num1 + num2);
}
}*/

//regular function 
function add(num1, num2) {
    console.log(num1 + num2); 
}
add(1 , 2)

//arrow function 
const addTwoNumbers = (num1, num2) => console.log(num1 + num2); 
addTwoNumbers(2,2); 

//Arrow function with no arguments 
const sayHelloWorld = () => console.log('Hello World!'); 

//arrow function with one parameter 
const sayHelloAgain = name => console.log(`Hello ${name}`); 
sayHelloAgain('Mark'); 


///================
//*Return keyword

function multiply(num1, num2) {
    return num1 * num2;
}
const result = multiply(3, 5)
console.log(result); 

const subtract = (num1, num2) => num1 - num2; 
const total = subtract(10, 5); 
console.log(total);

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}

const isEven = areBothEven(2, 2);
console.log(isEven); 

function myArray(n1, n2) {
    return [n1+n2];
}

const arr = myArray(3, 3); 
console.log(arr);

//return object 
function studentInfo(studentName, cohort, age) {
    return {
        name: studentName, 
        cohort: cohort, 
        age
    }
}

 const s1 = studentInfo('John', '101-2023', 23); 

 console.log(s1);

 /*EXERCISE 1: Write a Function Declaration
Write a function named computeArea using the function declaration approach.

It will have two parameters: width& height.

It will compute the area of a rectangle (width X height) and return a string in the following form:

The area of a rectangle with a width of _ and a height of _ is ___ square units.

Invoke the function to test it.*/

computeArea ('width, height')
function computeArea(area) {
    console.log(area);
}



/*EXERCISE 2: Write a Function Expression
Write a function named planet Has Water using the function expression syntax.

It will have one parameter: planet.

Return true if the planet argument is either "Earth" or "Mars", otherwise return false.

Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).

Invoke the function a couple of times to test it!*/

