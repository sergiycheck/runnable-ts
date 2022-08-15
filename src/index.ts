console.log('should run');

function varAndLetScope() {
  var a = 1;
  var b = 2;

  if (a === 1) {
    var a = 11; // the scope is global
    let b = 22; // the scope is inside the if-block

    console.log(`a `, a); // 11
    console.log(`b `, b); // 22
  }

  console.log(`a`, a); // 11
  console.log('b', b); // 2

  //var, whose scope is inside the function where it is declared
  // let limits the variable's scope to that block
}

(async function main() {
  //
  varAndLetScope();
})();
