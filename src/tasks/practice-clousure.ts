function range(start: number, end: number): number[];
function range(start: number): (end: number) => number[];
function range(start: number, end?: number) {
  function startEndRange(start: number, end: number) {
    if (start > end) {
      return [];
    } else if (start == end) {
      return [start];
    } else if (start < end) {
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    }
  }

  if (start && end) {
    const result = startEndRange(start, end);
    console.log(result);
    return result;
  }

  return function makeRangeFrom(end: number) {
    const result = startEndRange(start, end);
    console.log(result);
    return result;
  };
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

const start3 = range(3);
const start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
