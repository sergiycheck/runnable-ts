export function matrixTranspose(matrix: number[][]) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposedMatrix = [];
  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
}

export function reverseMatrixRows(matrix: number[][]) {
  const rows = matrix.length;

  for (let i = 0; i < rows; i++) {
    Array.isArray(matrix[i]) && matrix[i].reverse();
  }

  return matrix;
}
