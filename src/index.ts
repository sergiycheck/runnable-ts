// circular reference

const a = {};
const b = a as any;
b.a = a;

console.log(JSON.stringify(b));
