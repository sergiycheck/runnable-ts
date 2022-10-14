console.log('should run');

(async function main() {
  let n = 10;
  const arrayWithHalfOfTheLength = new Array(Math.round(n / 2)).fill(1);

  let divisitorsCount = 1;
  let numToDivide = 1;
  arrayWithHalfOfTheLength.forEach(() => {
    if (n % numToDivide === 0) {
      ++divisitorsCount;
    }
    ++numToDivide;
  });

  console.log(divisitorsCount);
})();
