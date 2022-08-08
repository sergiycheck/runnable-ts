console.log('should run');

(async function main() {
  //

  setTimeout(() => console.log('timeout'));
  const p = new Promise((resolve) => resolve('resolved'));
  const r = await p;
  console.log('result ', r);
})();
