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
