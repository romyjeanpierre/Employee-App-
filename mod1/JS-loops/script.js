

//(initialization; condition; incrementor)
for(let counter = 1; counter <=10; counter++) {
    // code does here
    console.log(counter);
}


// ===countdown from 10 to 1
for(let counter = 10; counter >=1; counter--) {
    console.log(counter);
}

// === countdown from 10 to 1  
for(let counter = 10; counter >=1; counter--) {
    console.log(counter);
} 

// === multiples of 2 
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
} 

// === loop that outputs multiples of 3 starting at 6 ending at 60
for(let i = 6; i <= 60; i += 3) {
    console.log(i);
}  

// === # increasing from 1-7 hashtags 
let hash = "#"
for (let i=0; i < 7; i++) {
    console.log(hash)
    hash += '#'
} 

// ===loop that iterates from 1 - 20. 
//Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers.
//Treat 2 as an even number and 1 & 3 as odd



// ===Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10
/*for(let x = 1; x <= 9; x += 2) {
    console.log(x);

    if (x === 9) {

        for (let y = 2; y <= 10; y += 2) {
            console.log(y);
        }
    }
}*/

// == while loop

let a = 1; 

while(a <= 10) {
    if (a % 2 === 0){
        console.log(`${a} is even!`);
    } else {

    console.log(`${a} is odd!`);
    }
    if (a === 5) {
        break; 
    }
    a++; 
}

