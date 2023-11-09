// const inputs = ['asdf', 'fdas', 'asds', 'd fm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];

// // asds
// // dfaa
// // aabb
// // aaabb

// for(const input of inputs) {
//   console.log(input, checkIfHasRepeatingChar2Time(input))
// }


function checkIfHasRepeatingChar2Time(str) {
  const charMap = new Map();
  for (const char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  const filteredResult = [...charMap.values()].filter((value) => value === 2);
  return filteredResult.length > 0;
}


console.log('Enter text (sample asdf) or CMD + C to exit');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    const res = checkIfHasRepeatingChar2Time(chunk)
    if(res) {
      process.stdout.write(`${chunk}`);
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

process.stdin.on('SIGINT', function () {
  process.stdout.write('CMD + C pressed, exiting.\n');
  process.exit();
});
