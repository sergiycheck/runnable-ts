export function longestCommonSubsequence(
  text1: string,
  text2: string,
  length1: number,
  length2: number
): number {
  if (!length1 || !length2) return 0;

  if (text1[length1 - 1] === text2[length2 - 1]) {
    return 1 + longestCommonSubsequence(text1, text2, length1 - 1, length2 - 1);
  } else {
    return Math.max(
      longestCommonSubsequence(text1, text2, length1 - 1, length2),
      longestCommonSubsequence(text1, text2, length1, length2 - 1)
    );
  }
}


