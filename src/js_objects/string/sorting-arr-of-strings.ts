export function sortingArrOfStrings() {
  const arr = ['one', 'firgure', 'three', 'cat', 'dog', 'mouse'];

  return arr.sort(new Intl.Collator('en').compare);
}
