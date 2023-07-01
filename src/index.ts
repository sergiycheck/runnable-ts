import assert from 'node:assert/strict';

void (function main() {
  const fallBackUser = { name: 'Guest2' };
  const user = getUser() || fallBackUser;
  const { name } = user;
  console.log(name);
})();

// void (function main() {
//   const fallBackName = 'Guest1';
//   try {
//     var user = getUser();
//     assert.ok(user, 'User is null or undefined');
//     var { name } = user as any;
//   } catch (error) {
//     name = fallBackName;
//     console.error(error);
//   }

//   console.log(name);
// })();

function getUser(): any {
  // return {name: 'John'};
  // return 0;
  return undefined;
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
