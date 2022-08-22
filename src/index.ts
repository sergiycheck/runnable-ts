console.log('should run');

(async function main() {
  typeof 42; // "number"
  typeof 'abc'; // "string"
  typeof true; // "boolean"
  typeof undefined; // "undefined"
  typeof null; // "object" -- oops, bug!
  typeof { a: 1 }; // "object"
  typeof [1, 2, 3]; // "object"
  typeof function hello() {}; // "function"
})();
