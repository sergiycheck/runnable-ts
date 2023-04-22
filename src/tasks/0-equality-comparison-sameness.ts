console.log('null == undefined ', null == undefined);
console.log('null === undefined ', null === undefined);
console.log('sameValueZero(null, undefined) ', sameValueZero(null, undefined));
console.log('Object.is(null, undefined) ', Object.is(null, undefined));

// string and array comparisons
console.log(`'' == [] `, '' == ([] as any));
console.log(`'' === [] `, '' === ([] as any));
console.log(`sameValueZero('', []) `, sameValueZero('', []));
console.log(`Object.is('', []) `, Object.is('', []));

function sameValueZero(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
