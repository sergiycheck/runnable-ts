function fullFillMatrix(rows: number, cols: number) {
  let matrix: { value: number }[][] = [];
  let counter = 10;
  for (let i = 0; i < rows; i++) {
    let arr: { value: number }[] = [];
    for (let j = 0; j < cols; j++) {
      counter++;
      arr.push({ value: getRandomIntInclusive(0, 10_000) });
    }
    matrix[i] = arr;
  }

  return matrix;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function quickSort(originalArray: { value: number }[]) {
  const array = originalArray.slice();

  if (array.length <= 1) {
    return array;
  }

  const leftArray = [];
  const rightArray = [];

  const pivotElement = array.shift();
  const centerArray = [pivotElement];

  while (array.length) {
    const currentElement = array.shift();

    if (currentElement.value == pivotElement.value) {
      centerArray.push(currentElement);
    } else if (currentElement.value < pivotElement.value) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  const leftArraySorted = quickSort(leftArray);
  const rightArraySorted = quickSort(rightArray);

  return leftArraySorted.concat(centerArray, rightArraySorted);
}

(function main() {
  const rows = 100;
  const matrix = fullFillMatrix(rows, rows);
  const arr = matrix.flat(Infinity) as unknown as { value: number }[];

  console.log(arr);

  const sortedMatrix = quickSort(arr);

  console.log(sortedMatrix);
})();
