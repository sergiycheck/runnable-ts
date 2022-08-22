console.log('should run');

(async function main() {
  console.log(NaN === NaN); // false
  console.log(0 === -0); // true

  console.log(Object.is(NaN, NaN));
  console.log(Object.is(0, -0));
})();
