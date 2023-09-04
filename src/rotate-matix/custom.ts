
const arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];


export const rotateMatrixClockwise = (arr: number[][]) => {
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

export const rotateMatrixClockwiseOnSomeDegrees = (arr: number[][], degrees:  90 | 180 | 360) => {
  const numberOfRotates = degrees / 90;

  let rotatedMatrix = arr;
  for(let i = 0; i< numberOfRotates; i++) {

    rotatedMatrix = rotateMatrixClockwise(rotatedMatrix)
  }
  return rotatedMatrix;
}
