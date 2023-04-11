const arr = [-1, -2, -1];

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let firstEl = arr.shift();
  let centerArr = [firstEl];
  let leftArr = [];
  let rightArr = [];
  while (arr.length) {
    let currEl = arr.shift();
    if (currEl === firstEl) {
      centerArr.push(currEl);
    } else if (currEl < firstEl) {
      leftArr.push(currEl);
    } else {
      rightArr.push(currEl);
    }
  }

  let leftArrSorted = quickSort(leftArr);
  let rightArrSorted = quickSort(rightArr);

  return leftArrSorted.concat(centerArr, rightArrSorted);
}

console.log(quickSort(arr));
