// https://leetcode.com/problems/longest-increasing-subsequence/

const input = [9, 3, 7, 4, 6, 9, 3, 13, 5, 0];
// const input = [0,1,0,3,2,3];

// 9 13
// 3 7 9 13
// 3 4 6 9 13

function getLongestGrowingSequence(input) {
  let arr = [];

  while (input.length) {
    let tempArr = [];
    let indexOfElToRemove = null;

    for (let j = 0; j < input.length; j++) {
      if (
        !tempArr.length ||
        tempArr[tempArr.length-1] < input[j]
      ) {
        tempArr.push(input[j]);
      }  
      
      if(indexOfElToRemove == null && input[j] > input[j + 1] && !tempArr.includes(input[j+1])) {
        indexOfElToRemove = j;
      }
    }

    if(tempArr.length > arr.length) {
      arr = tempArr;
    }

    tempArr = [];


    input.splice(indexOfElToRemove, 1);

  }

  return arr;
}

// output: 3 4 6 9 13
const result = getLongestGrowingSequence(input);

console.log('result', result);


// function getLongestGrowingSequence(input) {
//   let tempArr = []
//   for (let i = 0; i < input.length; i++) {
//     if(!tempArr.length || tempArr[tempArr.length - 1] < input[i]){
//       tempArr.push(input[i])
//     } else{
//       tempArr.pop()
//     }
    
//   }
//   return tempArr
// }

