export function rotateSomeNElementsOfArr(arr: number[], n: number) {

  const firstPart = arr.slice(0, n);
  const secondPart = arr.slice(n, arr.length);

  return [...secondPart, ...firstPart];
}