export function failure() {
  return { success: false };
}
export function success(next) {
  return { success: true, next: next };
}

export function world(tokens, i) {
  if (i >= tokens.length) return $.failure();
  else if (tokens[i] == 'world') return $.success(i + 1);
  else return $.failure();
}

export function hello(tokens, i) {
  if (i >= tokens.length) {
    return failure();
  } else if (tokens[i] == 'hello') {
    return success(i + 1);
  } else {
    return failure();
  }
}

const $ = {
  failure: failure,
  success: success,
  world: world,
  hello: hello,
};

export function helloWorld(tokens: string[], positionOfTheFirstToken: number) {
  let result = $.hello(tokens, positionOfTheFirstToken) as {
    success: boolean;
    next: number;
  };

  if (!result.success) return $.failure();

  return $.world(tokens, result.next);
}

console.log(helloWorld(['hello', 'world'], 0));
console.log(helloWorld(['hello', 'notworld'], 0));
console.log(helloWorld(['nothello', 'world'], 0));
