console.log('should run');

function varAndLetScope() {
  let x = 1;

  {
    var x = 2; // SyntaxError for re-declaration
  }
}

(async function main() {
  //
  varAndLetScope();
})();
