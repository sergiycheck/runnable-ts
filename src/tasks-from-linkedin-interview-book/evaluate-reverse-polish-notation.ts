export const polishNotation1 = ['2', '1', '+', '3', '*']; // 9
export const polishNotation2 = ['4', '13', '5', '/', '+']; // 6

export function evaluatePolishNotion(arr: string[]) {
  return arr
    .reduce((prev: number[], curr: string, i) => {
      if (!Number.isNaN(+curr)) {
        prev.push(Number(curr));
      } else if (prev.length >= 2) {
        let result = 0;
        const iMin1Num = prev.pop();
        const iMin2num = prev.pop();
        switch (curr) {
          case '/':
            result = Math.floor(iMin2num / iMin1Num);
            break;
          case '*':
            result = Math.floor(iMin2num * iMin1Num);
            break;
          case '+':
            result = Math.floor(iMin2num + iMin1Num);

            break;
          case '-':
            result = Math.floor(iMin2num - iMin1Num);

            break;
        }

        prev.push(result);
      }

      return prev;
    }, [])
    .reduce((prev, curr) => prev + curr, 0);
}
