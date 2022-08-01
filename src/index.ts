console.log('should run');

function getObjOfWordsCount(word) {
  return word.split('').reduce((prev, curr) => {
    if (curr in prev) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }

    return prev;
  }, {});
}

function compareObjects(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 == null ||
    obj2 == null
  ) {
    return false;
  }

  let keys1 = Object.keys(obj1),
    keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key)) return false;

    if (!compareObjects(obj1[key], obj2[key])) return false;
  }

  return true;
}

export default function anagrams(word: string, words: string[]) {
  const wordObj = getObjOfWordsCount(word);

  const filteredWords = words.filter((w) => {
    const currentWordObj = getObjOfWordsCount(w);
    const result = compareObjects(wordObj, currentWordObj);

    console.log('result ', result, ' of comparing ', wordObj, currentWordObj);

    return result;
  });

  return filteredWords;
}

const result = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);

console.log(result);
