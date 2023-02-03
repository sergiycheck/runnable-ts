(function main() {
  (function fizzBuzz() {
    new Array(101).fill(true).forEach((_, index) => {
      if (index == 0) return;
      const remainderOf3Eq0 = index % 3 == 0;
      const remainderOf5Eq0 = index % 5 == 0;

      if (remainderOf3Eq0 && remainderOf5Eq0) {
        console.log(`FizzBuzz`);
        return;
      } else if (remainderOf3Eq0) {
        console.log(`Fizz`);
        return;
      } else if (remainderOf5Eq0) {
        console.log(`Buzz`);
        return;
      }
      console.log(index);
    });
  })();
})();
