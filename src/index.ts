// function getFibonacciNums(l: number) {
//   const nums = [0, 1];
//   for (let i = 2; i < l; i++) {
//     nums.push(nums[i - 1] + nums[i - 2]);
//   }

//   return nums;
// }

// console.log(getFibonacciNums(10));

// console.log('0' == 0 as any)


const arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5];

let a = arr.reduce((prev, cur) => {
  if (cur in prev) {
    prev[cur]++;
  } else {
    prev[cur] = 1;
  }
  return prev;
}, {})

let result = Object.entries(a).find((item: any) => {
  console.log(item);
  return item[1] % 2 == 1;
})

console.log(+result[0])


