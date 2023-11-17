// https://leetcode.com/problems/longest-increasing-subsequence/




// function getLongestGrowingSequence(input) {
//   let arr = [];

//   while (input.length) {
//     let tempArr = [];
//     let indexOfElToRemove = null;

//     for (let j = 0; j < input.length; j++) {
//       if (
//         !tempArr.length ||
//         tempArr[tempArr.length-1] < input[j]
//       ) {
//         tempArr.push(input[j]);
//       }  
      
//       if(indexOfElToRemove == null && input[j] > input[j + 1] && !tempArr.includes(input[j+1])) {
//         indexOfElToRemove = j;
//       }
//     }

//     if(tempArr.length > arr.length) {
//       arr = tempArr;
//     }

//     tempArr = [];


//     input.splice(indexOfElToRemove, 1);

//   }

//   return arr;
// }

function getLongestGrowingSequence(input) {
  const arr = input;
  const n = arr.length;
  
  // Initialize an array to store the length of the LIS ending at each index
  const lis = new Array(n).fill(1);

  // Dynamic programming to calculate LIS
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  // Find the maximum value in the lis array
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (lis[i] > maxLength) {
      maxLength = lis[i];
    }
  }

  return maxLength;
}


const input = [9, 3, 7, 4, 6, 9, 3, 13, 5, 0];
// const input = [0,1,0,3,2,3];

// output: 3 4 6 9 13
const result = getLongestGrowingSequence(input);

console.log('result', result);



