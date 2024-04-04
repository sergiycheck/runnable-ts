var threeConsecutiveOdds = function (arr) {
  let diff;
  return (
    arr.reduce((prev, curr, i) => {
      if (curr % 2 == 1) {
        if (
          !prev.length ||
          (prev.length && prev[prev.length - 1][1] == i - 1)
        ) {
          if (!diff) {
            diff = prev.length ? curr - prev[prev.length - 1][0] : 0;
            prev.push([curr, i]);
          } else {
            const currentDiff = curr - prev[prev.length - 1][0];
            if (currentDiff === diff) {
              prev.push([curr, i]);
            } else {
              prev = [];
              diff = undefined;
            }
          }
        } else {
          prev = [];
        }
      }
      return prev;
    }, []).length >= 3
  );
};

const arr = [2, 6, 4, 1];
const result = threeConsecutiveOdds(arr);
console.log(result);

const arr2 = [1, 2, 34, 3, 4, 5, 7, 23, 12];
const result2 = threeConsecutiveOdds(arr2);
console.log(result2);

const arr3 = [];
const result3 = threeConsecutiveOdds(arr3);
console.log(result3);
