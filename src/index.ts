console.log('should run');

declare global {
  interface String {
    sort(): boolean;
  }
}

String.prototype.sort = function () {
  //abba => aabb
  return this.split('').sort().join('');
};

function anagrams(word, words) {
  const sorted = word.sort();
  return words.filter((currentWord) => {
    return sorted === currentWord.sort();
  });
}

export default anagrams;
