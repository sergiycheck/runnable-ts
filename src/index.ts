import { rotateMatrixTransposeReverse } from "./rotate-matix/chartgpt-solution";
import { rotateMatrixClockwiseOnSomeDegrees } from "./rotate-matix/custom";

// two dimensional array with random numbers
const arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];

console.log(rotateMatrixTransposeReverse(arr));

console.log(rotateMatrixClockwiseOnSomeDegrees(arr, 90))
