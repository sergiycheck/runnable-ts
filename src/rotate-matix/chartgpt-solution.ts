export function rotateMatrixTransposeReverse(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Step 1: Transpose the matrix
  const transposedMatrix = [];
  for (let i = 0; i < cols; i++) {
    const newRow = [];
    for (let j = 0; j < rows; j++) {
      newRow.push(matrix[j][i]);
    }
    transposedMatrix.push(newRow);
  }


  // Step 2: Reverse the rows
  for (let i = 0; i < cols; i++) {
    Array.isArray(transposedMatrix[i]) && transposedMatrix[i].reverse();
  }

  return transposedMatrix;
}
