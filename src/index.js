let numbers = [1, 2, 3, 4, NaN];

console.log(numbers.indexOf(NaN));

console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN));
