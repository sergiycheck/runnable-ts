export function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split('')
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                (p) => char + p
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}

export function permutationsLonger(str) {
  if (str.length <= 1) return [str];

  const mappedPermutationResult = str.split('').map((char, i) => {
    const nextStringToPermute = str.substr(0, i) + str.substr(i + 1);

    const resultOfPermutations = permutationsLonger(nextStringToPermute);

    const mappedPermutationResult = resultOfPermutations.map((p) => {
      const mappedStr = char + p;
      return mappedStr;
    });

    return mappedPermutationResult;
  });

  const reducedPermutationResult = mappedPermutationResult.reduce((r, x) => {
    const reducedStr = r.concat(x);
    return reducedStr;
  }, []);

  return Array.from(new Set(reducedPermutationResult));
}

export function getPermutations(string) {
  if (string.length === 1) {
    return [string];
  }

  let permutations = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let remainingChars = string.slice(0, i) + string.slice(i + 1);
    let remainingPermutations = getPermutations(remainingChars);
    for (let permutation of remainingPermutations) {
      permutations.push(char + permutation);
    }
  }

  return permutations;
}
