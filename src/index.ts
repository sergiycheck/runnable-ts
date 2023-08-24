import fs from 'node:fs';
import { nextTick } from 'node:process';

function getLongestUniqueSubstring(text: string) {
  let max = 0;
  let longestSubString = '';
  let currentSubString = text[0];
  for (let i = 1; i < text.length; i++) {
    if (!currentSubString.includes(text[i])) {
      currentSubString += text[i];
    } else {
      if (currentSubString.length > max) {
        max = currentSubString.length;
        longestSubString = currentSubString;
      }

      currentSubString = text[i];
    }
  }

  return {text, max, longestSubString};
}

function main() {

  console.log(getLongestUniqueSubstring('abcabcbb'));
  console.log(getLongestUniqueSubstring('bbbbb'));
  console.log(getLongestUniqueSubstring('pwwkew'));
}

main();
