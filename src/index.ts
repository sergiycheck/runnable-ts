// two dimensional array with random numbers
const arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];

//3 4 5
//1 0 0
//4 5 4
//8 8 -1

//arr[3][0]
//arr[2][0]

//rotate the matrix clockwise 90 degrees
//-1 8 8
//4 5 4
//0 0 1
//5 4 3

// const rotateArrClockwise = (arr: number[][]) => {
//   return arr.map((a) => a.reverse()).reverse()
// }

const rotateMatrixClockwise = (arr: number[][]) => {
  const newArr = [];

  for (let j = 0; j < arr[0].length; j++) {
    let rowArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      rowArr.push(arr[i][j]);
    }

    newArr.push(rowArr);
    rowArr = [];
  }

  return newArr;
};

const rotateMatrixClockwiseOnSomeDegrees = (arr: number[][], degrees: 45 | 90 | 135 | 180 | 360) => {
  const numberOfRotates = degrees / 45;

  let rotatedMatrix = arr;
  for(let i = 0; i< numberOfRotates; i++) {

    rotatedMatrix = rotateMatrixClockwise(rotatedMatrix)
  }
  return rotatedMatrix;
}

const rotated = rotateMatrixClockwiseOnSomeDegrees(arr, 135);


console.log(rotated);
