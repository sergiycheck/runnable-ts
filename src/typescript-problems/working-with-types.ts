// function foo<T>(bar: T, convertToNumber: boolean) {
//   // unknown hidden logic

//   return convertToNumber ? Number(bar) : bar;
// }

// const t1 = foo('42'); // string type
// const t2 = foo(42); // number type

// // *
// const t3 = foo('42', true); // number type

// // ----------------

// function isNumber(value: unknown): value is number {
//   return typeof value === 'number';
// }

// const arg1: unknown = 42;

// if (isNumber(arg1)) {
//   arg; // type: number
// }
