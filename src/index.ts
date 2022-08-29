console.log('should run');

(async function main() {
  var adult = true;

  if (adult) {
    var myName = 'Kyle';
    let age = 39;
    console.log('Shhh, this is a secret!');
  }

  console.log(myName);
  // Kyle

  // console.log(age);
  // Error!
})();
