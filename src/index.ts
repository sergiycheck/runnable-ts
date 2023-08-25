const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomArr1 = Array.from({ length: 10_000 }, () =>
  randomInteger(1, 10_000)
);
const randomArr2 = Array.from({ length: 10_000 }, () =>
  randomInteger(1, 10_000)
);

function ArrayDiffOriginal(a, b) {
  return a.filter((el) => !b.includes(el));
}

function arrayDiff(a, b) {
  console.log('a', a);
  console.log('b', b);

  if (!a.length) return a;

  const numOccurencesOriginal = a.reduce((prev, curr, index) => {
    if (curr in prev) {
      return {
        ...prev,
        [curr]: {
          count: prev[curr].count + 1,
          indexes: [...prev[curr].indexes, index],
        },
      };
    }

    return {
      ...prev,
      [curr]: { count: 1, indexes: [index] },
    };
  }, {});

  console.log('numOccurencesOriginal', numOccurencesOriginal);

  const newInstanceOfArr = Object.entries(numOccurencesOriginal).map((el) => [
    el[0],
    { ...el[1] },
  ]);

  const numOccurencesUpdated = Object.fromEntries(newInstanceOfArr);

  for (let el of b) {
    if (el in numOccurencesUpdated) {
      numOccurencesUpdated[el].count++;
    }
  }

  console.log('numOccurencesUpdated', numOccurencesUpdated);

  const nonUpdatedProperties = Object.entries(numOccurencesOriginal).filter(
    (originalEl) => {
      if (
        numOccurencesOriginal[originalEl[0]].count ===
        numOccurencesUpdated[originalEl[0]].count
      )
        return true;
      return false;
    }
  );

  console.log('non updated properties');
  console.dir(nonUpdatedProperties, { depth: null });

  const diffArr = [];
  for (let el of nonUpdatedProperties) {
    for (let index of el[1].indexes) {
      diffArr[index] = el[0];
    }
  }

  console.log('diffArr', diffArr);

  const filteredDiffArr = diffArr.map(Number).filter((el) => el !== undefined);

  console.log('filteredDiffArr', filteredDiffArr);

  return filteredDiffArr;
}


// console.log('diff 1', ArrayDiffOriginal(randomArr1, randomArr2));

console.log('diff 2', arrayDiff(randomArr1, randomArr2));
