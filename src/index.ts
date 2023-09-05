import { matrixTranspose, reverseMatrixRows } from "./rotate-matix/chartgpt-solution";


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

const transposedMatrix = matrixTranspose(matrix);
console.log(transposedMatrix);

const reversedMatrix = reverseMatrixRows(transposedMatrix);

console.log(reversedMatrix);
