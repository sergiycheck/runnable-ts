// const chunkArray = (arr: number[], size: number): number[][] => {
//   return arr.reduce((prev, curr, idx) => {
//     if (idx % size === 0) {
//       return [...prev, [curr]];
//     } else {
//       const allElementsBeforeLast = prev.slice(0, -1);
//       const lastElement = prev.slice(-1)[0];

//       console.log('all elements before last', allElementsBeforeLast);
//       console.log('last element', lastElement);

//       return [...allElementsBeforeLast, [...lastElement, curr]];
//     }
//   }, []);
// };

// const chunk = (input, size) => {
//   return input.reduce((arr, item, idx) => {
//     return idx % size === 0
//       ? [...arr, [item]]
//       : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
//   }, []);
// };

export const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    const toReturnIf0Remainder = [...arr, [item]];

    const allArraysBeforeTheLast = arr.slice(0, -1);
    const lastArray = arr.slice(-1)[0] ?? [];

    const toReturnIfNot0Remainder = [
      ...allArraysBeforeTheLast,
      [...lastArray, item],
    ];

    return idx % size === 0 ? toReturnIf0Remainder : toReturnIfNot0Remainder;
  }, []);
};
