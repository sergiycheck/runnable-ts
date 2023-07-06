export function failure() {
  return { success: false };
}
export function success(next) {
  return { success: true, next: next };
}

const $ = {
  failure: failure,
  success: success,
};

export function world(tokens, i) {
  if (i >= tokens.length) return $.failure();
  else if (tokens[i] == 'world') return $.success(i + 1);
  else return $.failure();
}

console.log(world(['hello'], 0));
console.log(world(['world'], 0));
