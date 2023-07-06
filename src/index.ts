export function failure() {
  return { success: false };
}
export function success(next) {
  return { success: true, next: next };
}

export function tokenMatcherBuilder(word) {
  return (tokens, i) => {
    if (i >= tokens.length) return $.failure();
    else if (tokens[i] == word) return $.success(i + 1);
    else return $.failure();
  };
}

export function sequence(...parsers) {
  return (tokens, i) => {
    for (const parser of parsers) {
      const result = parser(tokens, i);

      if (!result.success) return $.failure();

      i = result.next;
    }

    return $.success(i);
  };
}

export const helloWorld = sequence(
  tokenMatcherBuilder('hello'),
  tokenMatcherBuilder('world')
);

const $ = {
  failure: failure,
  success: success,
  world: tokenMatcherBuilder('world'),
  hello: tokenMatcherBuilder('hello'),
};

console.log(helloWorld(['hello', 'world'], 0));
console.log(helloWorld(['hello', 'notworld'], 0));
console.log(helloWorld(['nothello', 'world'], 0));
