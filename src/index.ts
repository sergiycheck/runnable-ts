import { setTimeout } from 'node:timers/promises';

const request = async (path: string = 'qwe') => {
  let timeOutTime = 500;
  let resolvedValue;

  if (Math.random() >= 0.5) {
    timeOutTime = 3000;
    resolvedValue = new Error(`${path} something went wrong..`);
  } else {
    resolvedValue = `${path} I am mock event data`;
  }

  return setTimeout(timeOutTime, Promise.resolve(resolvedValue));
};

(async () => {
  console.time('start');

  Promise.race([
    request(),
    (async () => {
      await setTimeout(1000);
      return 'timeout';
    })(),
  ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  console.timeEnd('end');
})();
