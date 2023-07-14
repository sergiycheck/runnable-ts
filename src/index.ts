// TODO:
// continue solving
// https://www.codewars.com/kata/52605419be184942d400003d/train/javascript

let initialAdd = undefined;
function defaultArguments(addFunction, params) {
  console.log('initialAdd before', initialAdd);
  console.log('addFunction before', addFunction);
  console.log('innerAdd', innerAdd);

  if (!initialAdd) {
    initialAdd = addFunction;
  } else if (
    initialAdd.toString() !== addFunction.toString() &&
    addFunction.toString() !== innerAdd.toString()
  ) {
    initialAdd = addFunction;
  } else {
    addFunction = initialAdd;
  }

  console.log('initialAdd after', initialAdd);
  console.log('addFunction after', addFunction);

  const functionString = addFunction.toString();

  console.log('functionString', functionString);

  const argumentsOfFunction = functionString
    .slice(functionString.indexOf('(') + 1, functionString.indexOf(')'))
    .split(',');

  function innerAdd(...args) {
    console.log('params', params);
    console.log('args', ...args);
    console.log('argumentsOfFunction', argumentsOfFunction);

    const correctDefaultParamsObj = argumentsOfFunction.reduce(
      (prev, current) => {
        if (params[current]) {
          prev[current] = params[current];
        }
        return prev;
      },
      {}
    );

    console.log('correctDefaultParamsObj', correctDefaultParamsObj);

    const validArgs = [];
    for (let i = 0; i < addFunction.length; i++) {
      if (!args.length && !argumentsOfFunction.length) break;

      // const validArg =
      //   args[i] ?? correctDefaultParamsObj[`${argumentsOfFunction[i]}`];

      const validArg = args[i]
        ? args[i]
        : args[0] == undefined
        ? args[i]
        : correctDefaultParamsObj[`${argumentsOfFunction[i]}`];

      if (validArg) {
        validArgs.push(validArg);
      }
    }

    console.log('validArgs', validArgs);

    const result = addFunction(...validArgs);

    return result;
  }

  return innerAdd;
}

function add(a, b) {
  return a + b;
}

let add_;

add_ = defaultArguments(add, { b: 9 });

let result = add_(10); // returns 19
console.log('result ', result, 'should be ', 19);

result = add_(10, 7); // returns 17
console.log('result ', result, 'should be ', 17);

result = add_(); // returns NaN
console.log('result ', result, 'should be ', NaN);

add_ = defaultArguments(add_, { b: 3, a: 2 });

result = add_(10); // returns 13 now
console.log('result ', result, 'should be ', 13);

result = add_(); // returns 5
console.log('result ', result, 'should be ', 5);

add_ = defaultArguments(add_, { c: 3 });

result = add_(10); // returns NaN
console.log('result ', result, 'should be ', NaN);

result = add_(10, 10); // returns 20
console.log('result ', result, 'should be ', 20);

function add2(x?, y?) {
  return x + y;
}

let add2_ = defaultArguments(add2, { y: 9 });

result = add2_(10);
console.log('result ', result, 'should be ', 19);

function addMore(a, b, c, d, e) {
  return a + b + c + d + e;
}

var closure_counter = (function accumulator() {
  var counter = 0;
  return function (x) {
    return (counter += x);
  };
})();

function returnId(_id) {
  return _id;
}
let returnId_ = defaultArguments(returnId, { _id: 'test' });

result = returnId_(undefined);
console.log('result ', result, 'should be ', undefined);
