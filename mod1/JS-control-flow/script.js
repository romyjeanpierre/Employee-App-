// global or outer scope
/*let x = 10;
let y = 5;
//inner scope
{
	let z = x + y;
	console.log(z);
}

{
    //local or inner scope
    let x = 55
    let z = x + y; 
    console.log(z);
}

/*{
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }*/
  /*
  {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

  let num = 33; 
  {
    let num = 20; 
    console.log(num);
  }

  console.log(num);
  */

 /* let x = 5;

  if (x > 0) {
      console.log('Positive!'); x++;
    }
  else {
      console.log('Negative.');
    }

    if (42) {
        console.log("True");
    }
if ("0") {}
if ("false") {}
if (-42) {}
if (Infinity) {}*/

/*let num = 40
if (num > 20) {console.log('Positive!');}
else {
    console.log('Negative');
}

let num1 = 15
if (num1 > 20) {console.log('Positive!');}
else {
    console.log('Negative');
}

let age = 18; 
if (age >= 18) {
    console.log('Access Granted');
}
else {
    console.log('Access Denied')
}*/

/*let age = 33;

if (age >= 18 && age <=29) {
    console.log('Access Granted!');
} else if (age >= 30 && age < 60) {
    console.log('you get admin access!');
} else if (age >= 60) {
   console.log('special access!');
} else {
    console.log('Access Denied');
}*/

//exercise 1 
let num = 101;

if (num >= 105) {
    console.log('Free');
} else if (num >= 103 && num < 105) {
    console.log('half-price')
} else if (num >= 100 && num <=102) {
    console.log('20% off');
}
else { console.log('full price')}

let num1 = 98; 
if (num1 >= 0) {
    console.log('positive')
    if (num1 > 100) {
        console.log('num1 > 100')
    }
}
if (num1 >= 10) {
    if (num1 < 100) {
        console.log('num1 is positive < 100')
    }
}
//exercise 2 
let grade = 98;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) { 
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
}else if (grade >= 55) {
    console.log('D');
} else {
    console.log('F');
}

// ===Switch 
let x = "0";

switch (x) {
   case "0":
     console.log("x is 0");
     break;

   case "1":
      console.log("x is 1");
      break;

       case "2":
      console.log("x is 2");
      break;

   default:
      console.log("input is incorrect");
       
}

let z = 5;
let y = 4;
let operand = "*";
switch (operand) {
   case "+":
       console.log(z + y);
       break;
   case "-":
       console.log(z - y);
       break;
   case "*":
       console.log(z * y);
       break
   case "/":
       console.log(z / y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}

//=====ternary 
const user = 'Abe';

user ? console.log(`Welcome ${user}1`) : console.log("Don't know who you are!");

let a =5; 
// (condition) ? 'expression' : 'expression'
(a % 2 === 0) ? console.log(`$[a} is even.`) : console.log(`${a} is odd.`);

//errors

/*let val = 10;

if (val < 0) {
	console.log("Negative!");
} else {
	throw "Error - I don't know what I'm doing.";
}

console.log("Does this log?");*/
 

// =======
/*let ted = 10;

try {
	if (ted < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}

} catch (error) {
	console.log(error);
}

console.log("Does this log?");*/

let ted2 = 10;

try {
	if (ted2 > 0) {
		let isEven = (ted2 % 2 == 0) ? true : false;
	} else if (ted2 <= 0) {
		throw "Error - Value of 0 or below.";
	}

	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(ted2);
}