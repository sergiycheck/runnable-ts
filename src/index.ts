// var a = Promise.resolve().then().then();

// var b = Promise.resolve('a');
// console.log(b);
// b.then();
// b.then();

async function A() {
  return 0;
}

// A()
//   .then((res) => {
//     throw 'err';
//   })
//   .catch((err) => {
//     console.log('err in catch', err);
//   })
//   .then((res) => {})
//   .finally(() => {});

var p1rej = Promise.reject('err');
var p2 = Promise.resolve('a');
var p3 = Promise.resolve('b');

Promise.all([p1rej, p2, p3]).catch((err) => console.log('err in catch', err));
Promise.all([p2, p3]).then((res) => console.log('res in then', res));
