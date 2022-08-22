console.log('should run');

(async function main() {
  var arr = ['1', '10', '100', '1000'] as any;
  for (let i = 0; i < arr.length && arr[i] < 500; i++) {
    // will run 3 times
    console.log(i);
  }
})();
