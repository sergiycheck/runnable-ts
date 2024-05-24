const arrs = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
  [
    [9, 10],
    [11, 12],
  ],
  [
    [13, 14],
    [15, 16],
  ],
  [
    [17, 18],
    [19, 20],
  ],
];

// I have to create this array
const step1Arr = [
  [
    [
      [1, 5, 9, 13, 17],
      [2, 6, 10, 14, 18],
    ],
  ],
  [
    [
      [3, 7, 11, 15, 19],
      [4, 8, 12, 16, 20],
    ],
  ],
];

const step2Arr = [
  [9, 10],
  [11, 12],
];

const avgByIndex = (arrs: number[][][]) => {
  const arrsMapped = arrs.map((arr) => arr.flat(Infinity));

  const step1Arr = arrsMapped.reduce((acc, curr) => {
    curr.forEach((item, i) => {
      if (!acc[i]) {
        acc[i] = [];
      }
      acc[i].push(item);
    });

    return acc;
  }, []);

  const step2Arr = step1Arr.map(
    (arr) => arr.reduce((acc, curr) => acc + curr, 0) / arr.length
  );

  return step2Arr.reduce((prev, curr, idx) => {
    if (idx % 2 === 0) {
      return [...prev, [curr]];
    } else {
      const firstPart = prev.slice(0, -1);
      const lastPart = prev.slice(-1)[0];
      return [...firstPart, [...lastPart, curr]];
    }
  }, []);
};
