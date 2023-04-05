// 1 returnings of comparisons
// console.log(1 && 2 && false);
// console.log((1 && 2) || false);

// 2 TDZ

// askQuestion();
// // ReferenceError

// let studentName = 'Suzy';

// function askQuestion() {
//   console.log(`${studentName}, do you know?`);
// }

// 3 circular reference

// const a = {};
// const b = a;
// b.a = a;

// console.log(JSON.stringify(b));

//4 demonstration of this
// const obj = {
//   innerArrow: () => {
//     return this;
//   },
//   innerMethod: function () {
//     return this;
//   },

//   aOuter: function () {
//     const innerA = () => {
//       return this;
//     };

//     return innerA;
//   },
// };

// console.log('obj.innerArrow()', obj.innerArrow());
// console.log('obj.innerMethod()', obj.innerMethod());

// const resultWithBoundObj = obj.aOuter();
// const passedAOuter = obj.aOuter;
// const resultWithGlobalThis = passedAOuter();

// console.log('resultWithBoundObj', resultWithBoundObj());
// console.log('resultWithGlobalThis ', resultWithGlobalThis());
