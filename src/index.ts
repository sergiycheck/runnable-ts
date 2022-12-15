(function main() {
  console.log(afuncExp);
  if (typeof afuncExp === 'function') afuncExp();

  console.log(afuncDecl);
  if (typeof afuncDecl === 'function') afuncDecl();

  var afuncExp = function () {
    let a = '123';
    console.log(a);
  };

  function afuncDecl() {
    let a = 'a declaration';
    console.log(a);
  }
})();
