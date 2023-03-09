function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });

  // for (let item in array) {
  //   await delayedLog(item);
  // }

  console.log('Process completed!');
}
process([1, 2, 3, 5]);

let end = Date.now();

///Process completed!
/// wait for 2000ms
//1, 2, 3, 5
