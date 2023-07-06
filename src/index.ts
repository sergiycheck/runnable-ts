const newLine1 = '\\';
const newLine2 = 'n';

const whiteSpace = ' ';
function solution(input, markers) {
  let strippedString = '';

  let isWhiteSpace = false;
  let indexOfWhiteSpaceStart = undefined;

  let toStripLine = false;
  let stripLineFromIndex = undefined;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == whiteSpace && !toStripLine) {
      isWhiteSpace = true;
      indexOfWhiteSpaceStart = i;
      continue;
    }

    if (markers.includes(input[i])) {
      toStripLine = true;
      stripLineFromIndex = i;

      if (isWhiteSpace) {
        input = input
          .split('')
          .splice(
            indexOfWhiteSpaceStart,
            stripLineFromIndex - indexOfWhiteSpaceStart
          )
          .join('');
      }
      continue;
    }

    if (toStripLine && input[i] == newLine1 && input[i + 1] == newLine2) {
      input = input
        .split('')
        .splice(stripLineFromIndex, i - stripLineFromIndex)
        .join('');
      continue;
    }

    strippedString = strippedString.concat(input[i]);

    isWhiteSpace = false;
    indexOfWhiteSpaceStart = undefined;

    toStripLine = false;
    stripLineFromIndex = undefined;
  }

  return strippedString;
}

const parsed = solution(
  'apples, plums % and bananas\npears\noranges !applesauce',
  ['%', '!']
);
console.log(parsed);
