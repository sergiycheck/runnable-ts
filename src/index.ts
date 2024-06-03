const strToPermutate1 = 'abc';
const strToPermutate2 = 'abcd';

function getPermutations(str: string) {
  if (str.length == 1) {
    return [str];
  }

  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const permutationsFromRemainingChars = getPermutations(remainingChars);
    for (const permutation of permutationsFromRemainingChars) {
      permutations.push(char + permutation);
    }
  }

  return permutations;
}

console.log(getPermutations(strToPermutate1));
console.log(getPermutations(strToPermutate2));
