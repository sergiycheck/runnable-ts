let myNumber = 100;
let myString = '100';

const exp1 = !typeof myNumber; // false
const exp2 = !typeof myString; // false

console.log(exp1);
console.log(exp2);

if (exp1 === 'string') {
  console.log('It is not a string!');
} else {
  console.log('It is a string!');
}

if (exp2 === 'number') {
  console.log('It is not a number!');
} else {
  console.log('It is a number!');
}

//  console.log('It is a string!');
//    console.log('It is a number!');
