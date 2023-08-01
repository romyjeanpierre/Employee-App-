

let student1 = "Kevin"; 
let student2 = "Cynthia";
let student3 = "Mahamadou"; 
let student4 = "Clement";
let student5 = "Benjamin";


console.log(`Welcome ${student1} to the class!`);


//* ===Literal Array 

const students = ["Kevin", "Cynthia", "Mahamadou", "Clement", "Benjamin", "Rimi", "Vanessa"];

// gets the length of the array 
console.log(students.length); 

// prints arrays in a table 
console.table(students); 

console.log(students[0]); // Kevin 

// Access the last element in the array 
console.log(students[students.length -1]); //Vanessa
console.log(students[students.length -4]); //clement

// class constructor function 
const nums = Array(2, 4, 6); 
console.log(nums); //prints (3) [2, 4, 6]

// Array with different types
const arrOfStuff = ['Hello', 333, [], {}, true, function(){}];

const student11 = ["john", 22, true];

const data = [
    {
        name: 'john'
    },
    {
        name: 'john'
    },
    {
        name: 'john'
    }
]

const movies = ['Caddyshack', 'Interstellar', 'Scarface', 'fast and Furious'];

// Access element by index
const firstMovie = movies [0];
console.log(firstMovie); 

const lastMovie = movies[movies.length -1];
console.log(lastMovie); 

console.log(movies)

//updating a value in the array by the index
movies[1] = 'Toy Story';


//for loop

for (let i = 0; i < movies.length; i++) {
 //console.log(movies[i]);
}; 

// == for of loop

for (let i of movies) {
    console.log( `My favorite movie is ${i}`); 
}

console.log ('============================'); 

//============= Array methods
const yourMovies = ['Caddyshack', 'Interstellar', 'Scarface']; 
const myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek']; 

//concat()
const ourMovies =  yourMovies.concat(myMovies); 
console.log(ourMovies); 

//making a copy of an array 
const copyArr = yourMovies.concat(); 

console.log(yourMovies); 
console.log(copyArr); 

console.log(copyArr === yourMovies); 

// this just passes the reference to the array //***DO NOT USE THIS METHOD TO COPY**
const otherCopyArr = yourMovies; 
console.log(otherCopyArr); 
console.log(otherCopyArr === yourMovies); 
yourMovies.push('Transformers'); 

//join ()

let a = 'hello'; 
let b = a; 
a = 'World!'
console.log(b); 
console.log(a); 

//*push () adds to the end 
yourMovies.push("Transformers")
console.table(yourMovies); 

//* unshift () adds to the start 
yourMovies.unshift('Toy Story'); 
console.table(yourMovies)

//* pop() removes from the end 
yourMovies.pop()
yourMovies.pop()
console.table(yourMovies);

//* shift()remove from the start of the array 
yourMovies.shift(); 
yourMovies.shift ();
console.table(yourMovies); 

//* splice() 
const favMovies = ['Caddyshack', 'Interstellar', 'Scarface']; 
console.log(favMovies); 

// (index to start, number to delete, )
favMovies.splice(0, 1, "Toy Story"); 
console.log(favMovies);

//* slice 

const topTwoMovies = favMovies.slice(0, 2); 
console.log(topTwoMovies); //(2) ['Toy Story', 'Interstellar']


console.log('==============================='); 

const oldMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']; 
console.log(oldMovies); //(4) ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']

oldMovies.forEach(function(el) {
    console.log(el.toLowerCase ); 
}); // ƒ toLowerCase() { [native code] }


//* ...Spread operator
const juneMovies = ['Spaceballs', 'The Sting', 'Alien']; 
const juneCopy = ['Toy Store', ...juneMovies, 'Transformers']; 

console.log(juneCopy); //(5) ['Toy Store', 'Spaceballs', 'The Sting', 'Alien', 'Transformers']

console.log (juneCopy === juneMovies); //false 


//* Join - create a single string from the values inside of an array 
//newList = [...oldList, newItem]
//Read it like a sentence and when you see the spread operator, say "everything from the old list"

console.log( juneCopy.join(' ')); //Toy Store Spaceballs The Sting Alien Transformers

console.log('======================================'); 
//* ================= Nested Arrays 

const numArray = 
[[1,2,3], 
[4, 5, 6], 
[7, 8, 9]
]; 

console.log( numArray [1][1] ); //5
console.log( numArray [2][0] ); //7

let numArray1 = [
    [1,2,3], 
    [4, 5, 6],
    [
        [7, 8, 9],
        [10, 11, 12], 
        [13, 14, 15]
    ],
]; 

console.log(numArray1[2][1][1]);
