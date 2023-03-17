console.log(
  JSON.stringify({ myArray: ['one', undefined, function () {}, Symbol('')] })
);
// myArray: ['one', null, null, null]

console.log(
  JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')])
);
// {} ????
//the undefined, functions, and symbols are not valid JSON values. These values are  either omitted
// in an object or changed to null in array.
// all synbol keys properties will be completely ignored hence it returns as empty object {}
