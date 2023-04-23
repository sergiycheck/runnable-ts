console.log(1 && 2 && false);
console.log((1 && 2) || false);

const foo = null ?? 'default string';
console.log(foo);

const baz = 0 ?? 42;
console.log(baz);

// const config = {
//   host: process.env.HOST || 3000
// }
