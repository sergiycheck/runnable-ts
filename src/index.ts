console.log('should run');

(async function main() {
  const myAddress = {
    street: '123 JS Blvd',
    city: 'Austin',
    state: 'TX',
  };

  const yourAddress = myAddress;

  // I've got to move to a new house!
  myAddress.street = '456 TS Ave';

  console.log(yourAddress.street);
  // 456 TS Ave
})();
