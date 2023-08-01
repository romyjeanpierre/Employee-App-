console.log('running');

console.log('hello' + 'world!');
console.log('This is the number' + 5); //type coercion 
console.log("Hello" - "JS"); // NaN -> Not A Number

const userName = "Inigo Montoya";
// username = "kevin";

userName[6] = "X"; // in-mutable

console.log(userName[6]);

//const a = 'a';
//const b = 'b';
//console.log(a < b); // true 

console.log("Hey" === 'hey'); //false because of the capital and lower case 
console.log('hey' =='hey');

const frost = 
"Nature's first green is gold, \
Her hardest hue to hold. \
Nothing gold can stay.";
console.log(frost);

//====
console.log('They said, "this string does not need an escape!"');

console.log('They said, "this string does\'t need an escape," but that isn\'t true.');


const frost4 =
	`Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost4);

const a = 5;
const b = 10;

console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
Therefore, 'a' plus 'b' is equal to ${a + b}.`);

const city = 'NYC';
const population = 5000; 
const relocated = 500; 
console.log(`In the city ${city} we have a population of ${population}, new population is ${population - relocated}'`);






