(function main() {
  var studentName = "Kyle";

  {
    // @ts-ignore
    console.log(studentName);
    // ???

    // ..

    let studentName = "Suzy";

    console.log(studentName);
    // Suzy
  }
})();
