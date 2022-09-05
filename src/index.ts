console.log('should run');

(async function main() {
  const str = 'tokenId_1';
  const [name, num] = str.split('tokenId_');
  console.log(name, num);
})();
