(function main() {
  // const emptyString = '';
  // const emptyArr = [];

  // console.log(`emptyString == emptyArr `, emptyString == (emptyArr as any));

  // // value-comparison operations in JS
  // //   === — strict equality (triple equals)
  // // == — loose equality (double equals)
  // // Object.is()

  // // four equality algorithms in JS
  // // isLooselyEqual ==
  // // isStrictlyEqual ===
  // // SameValue Object.is
  // // SameValueZero

  // console.log(typeof emptyArr);
  // console.log(`emptyArr[Symbol.toPrimitive]`, emptyArr[Symbol.toPrimitive]);
  // const valueOfResult = [].valueOf();
  // console.log('valueOfResult', valueOfResult);
  // console.log(typeof valueOfResult);
  // const toStringResult = valueOfResult.toString();
  // console.log(`toStringResult`, toStringResult);

  // // same length and order of characters
  // console.log('toStringResult == emptyString', toStringResult == emptyString);

  // toPrimitive demonstration

  type Hint = string | number | 'default';

  const obj = {
    [Symbol.toPrimitive](_hint: Hint) {
      return '123';
    },
  };

  console.log('123' == (obj as any));

  Array.prototype[Symbol.toPrimitive] = function (_hint: Hint) {
    return 'arr';
  };

  console.log('arr' == ([] as any));
})();
