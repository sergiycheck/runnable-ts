// function fromNumToRoman() {
//   return {
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M',
//   };
// }

// function romanToNum() {
//   const numToRomanRes = fromNumToRoman();
//   return Object.entries(numToRomanRes).reduce((acc, [key, value]) => {
//     acc[value] = +key;
//     return acc;
//   }, {});
// }
// class RomanNumerals {
//   static toRoman(num) {
//     const parts = [];

//     const numToRomanRes = fromNumToRoman();

//     const numToRomanArr = Object.entries(numToRomanRes);

//     for (let i = numToRomanArr.length - 1; i >= 0; i--) {
//       const [numToRomanKey] = numToRomanArr[i];
//       const part = num % +numToRomanKey;
//       parts.push(part);
//       num -= part;
//     }

//     console.log(parts);
//   }

//   static fromRoman(str) {
//     return 4;
//   }
// }

// // console.log(RomanNumerals.toRoman(1990));

// function toRoman2(num) {
//   const letters = [
//     'M',
//     'CM',
//     'D',
//     'CD',
//     'C',
//     'XC',
//     'L',
//     'XL',
//     'X',
//     'IX',
//     'V',
//     'IV',
//     'I',
//   ];
//   const lookupValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   let result = '';
//   for (let index = 0; num; index++) {
//     while (num >= lookupValues[index]) {
//       num -= lookupValues[index];
//       result += letters[index];
//     }
//   }
//   return result;
// }

const letters = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

const lookupValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

class RomanManager {
  /**
   *
   * @param {number} num
   * @returns {string}
   */
  static toRoman(num) {
    let result = '';
    for (let i = 0; num; i++) {
      while (num >= lookupValues[i]) {
        result += `${letters[i]}`;
        num -= lookupValues[i];
      }
    }

    return result;
  }

  /**
   *
   * @param {string} str
   * @returns {number}
   */
  static fromRoman(str) {
    let num = 0;
    for (let i = 0; i < letters.length; i++) {
      while (str.indexOf(letters[i]) === 0) {
        num += lookupValues[i];
        str = str.replace(letters[i], '');
      }
    }
    return num;
  }
}

const roman753 = RomanManager.toRoman(753);
const roman1990 = RomanManager.toRoman(1990);

console.log(roman753);
console.log(roman1990);

// function fromRoman(str) {
//   const letters = [
//     'M',
//     'CM',
//     'D',
//     'CD',
//     'C',
//     'XC',
//     'L',
//     'XL',
//     'X',
//     'IX',
//     'V',
//     'IV',
//     'I',
//   ];
//   const lookupValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   let result = 0;
//   for (let index = 0; index < letters.length; index++) {
//     while (str.indexOf(letters[index]) === 0) {
//       result += lookupValues[index];
//       str = str.replace(letters[index], '');
//     }
//   }
//   return result;
// }

const fromRoman753 = RomanManager.fromRoman(roman753);
const fromRoman1990 = RomanManager.fromRoman(roman1990);

console.log(753 === fromRoman753, fromRoman753);
console.log(1990 === fromRoman1990, fromRoman1990);
