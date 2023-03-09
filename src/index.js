const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        return { value: this[keys[i++]], done: i > keys.length };
      },
    };
  },
};

const iterator1 = obj1[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield this[key];
    }
  },
};

const iterator2 = obj2[Symbol.iterator]();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
