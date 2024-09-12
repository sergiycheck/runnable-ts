import { MyPromise } from './js_objects/promise/custom-promise';

new MyPromise((_, reject) => {
  reject(42);
  return 41;
})
  .then((x: any) => {
    const thenResult = x - 2;
    console.log('Then:', thenResult);
    return thenResult;
  })
  .catch((result) => {
    console.log('Catch:', result);
  });
