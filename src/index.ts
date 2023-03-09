var y = 1 as any;
if (function f() {}) {
  // @ts-ignore
  y += typeof f;
}
console.log(y);
