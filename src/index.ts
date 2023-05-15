type State = {
  matrix: number[][];
};

function fullFillMatrix(rows: number, cols: number) {
  let matrix: number[][] = [];
  let counter = 10;
  for (let i = 0; i < rows; i++) {
    let arr: number[] = [];
    for (let j = 0; j < cols; j++) {
      counter++;
      arr.push(counter);
    }
    matrix[i] = arr;
  }

  return matrix;
}

// [ 11, 12, 13, 14, 15 ],
// [ 16, 17, 18, 19, 20 ],
// [ 21, 22, 23, 24, 25 ],
// [ 26, 27, 28, 29, 30 ],
// [ 31, 32, 33, 34, 35 ]

// 11, 12, 13
// 16, 17, 18
// 21, 22, 23

// 17, 18, 19,
// 22, 23, 24,
// 27, 28, 29,

function getCordsOfNum(num: number, state: State) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (state.matrix[i][j] === num) {
        return { i, j };
      }
    }
  }
}

function getInnerMatrixFromTwoNums(num1: number, num2: number, state: State) {
  let cords1 = getCordsOfNum(num1, state);
  let cords2 = getCordsOfNum(num2, state);

  let innerMatrix: number[][] = [];

  for (let i = cords1.i, n = 0; i <= cords2.i; i++, n++) {
    let arr = [];
    for (let j = cords1.j, k = 0; j <= cords2.j; j++, k++) {
      arr[k] = state.matrix[i][j];
    }
    innerMatrix[n] = arr;
  }

  return innerMatrix;
}

(function main() {
  const state: State = {
    matrix: [],
  };

  state.matrix = fullFillMatrix(5, 5);

  console.log(state);

  const innerMatrix1 = getInnerMatrixFromTwoNums(11, 23, state);
  console.log(innerMatrix1);

  const innerMatrix2 = getInnerMatrixFromTwoNums(17, 29, state);
  console.log(innerMatrix2);
})();
