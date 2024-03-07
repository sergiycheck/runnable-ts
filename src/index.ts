function duplicateCount1(text) {
  //we have to put + to match more than 1 occurrence of the same character
  const regex1 = /([^*])\1+/g;

  const partOfRegex1 = /[^*]/g;

  const lowerCaseSplitSortedJoined = text
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  const match1 = lowerCaseSplitSortedJoined.match(regex1);
  console.log('match1', match1);

  const match2 = lowerCaseSplitSortedJoined.match(partOfRegex1);
  console.log('partOfRegex1', match2);

  return (match1 || []).length;
}

function duplicateCount2(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      const indexOf = arr.indexOf(val);
      const lastIndexOf = arr.lastIndexOf(val);
      // we are looking for the first occurrence with indexOf
      // and the last occurrence with lastIndexOf
      // if arr has only one occurrence of val, then indexOf and lastIndexOf will be the same
      const indexOfIsNotI = indexOf !== i;
      const lastIndexOfIsI = lastIndexOf === i;
      return indexOfIsNotI && lastIndexOfIsI;
    }).length;
}

const testCases = [
  '',
  'abcde',
  'aabbcde',
  'aabBcde',
  'indivisibility',
  'Indivisibilities',
  'aA11',
];

testCases.forEach((testCase) => {
  console.log('testCase', testCase);
  console.log('duplicateCount1', duplicateCount1(testCase));
});
