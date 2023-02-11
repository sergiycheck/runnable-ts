export const notSortedArr = [
  15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,
];

export const quickSort = (arrArg: number[]) => {
  const arr = arrArg.slice();

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.shift();

  //left arr
  //center arr
  //right arr

  const leftArr = [];
  const rightArr = [];
  const centerArr = [pivot];

  // Split all array elements between left, right and center arrays.
  while (arr.length) {
    const elToCompare = arr.shift();

    if (elToCompare == pivot) {
      centerArr.push(elToCompare);
    } else if (elToCompare < pivot) {
      leftArr.push(elToCompare);
    } else {
      rightArr.push(elToCompare);
    }
  }

  //call quickSort for left arr
  const sortedLeft = quickSort(leftArr);
  //call quickSort for right arr
  const sortedRight = quickSort(rightArr);

  return sortedLeft.concat(centerArr, sortedRight);
};

const sortedArr = quickSort(notSortedArr);

console.log(sortedArr);
