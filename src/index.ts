export function failure() {
  return { success: false };
}

export function success(next) {
  return { success: true, next: next };
}

export function tokenMatcherBuilder(word) {
  return (tokens, i) => {
    if (i >= tokens.length) return failure();
    else if (tokens[i] == word) return success(i + 1);
    else return failure();
  };
}

export function sequence(...parsers) {
  return (tokens, i) => {
    for (const parser of parsers) {
      const result = parser(tokens, i);

      if (!result.success) return failure();

      i = result.next;
    }

    return success(i);
  };
}

export function anyOf(...parsers) {
  return (tokens, i) => {
    for (const parser of parsers) {
      const result = parser(tokens, i);

      if (result.success) return result;
    }

    return failure();
  };
}

export function optional(parser) {
  return (tokens, i) => {
    const result = parser(tokens, i);
    if (result.success) return result;
    return success(i);
  };
}

const helloWorldSequence = sequence(
  tokenMatcherBuilder('hello'),
  tokenMatcherBuilder('world')
);

const helloOrWorldAnyOf = anyOf(
  tokenMatcherBuilder('hello'),
  tokenMatcherBuilder('world')
);

const book = sequence(
  optional(tokenMatcherBuilder('the')),
  tokenMatcherBuilder('book')
);

console.log(book(['book'], 0));
console.log(book(['the', 'book'], 0));
