// function lengthOfLongestSubstring(s: string): number {
//   if (!s) return 0;

//   if (s.length == 1) return 1;

//   const set = new Set();

//   let maxLength = 0;
//   let left = 0;

//   for (let right = 0; right < s.length; right++) {
//     let elRight = s[right];
//     let elLeft = s[left];

//     if (!set.has(elRight)) {
//       set.add(elRight);

//       /**  ?? dont understant*/
//       maxLength = Math.max(maxLength, right - left + 1);
//     } else {
//       while (elLeft !== elRight) {
//         set.delete(elLeft);
//         left++;
//         elLeft = s[left];
//       }
//       set.delete(elLeft);
//       left++;

//       set.add(elRight);
//     }
//   }

//   return maxLength;
// }

function lengthOfLongestSubstring(str: string): number {
  if (!str) return 0;

  if (str.length == 1) return 1;

  const set = new Set();

  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
