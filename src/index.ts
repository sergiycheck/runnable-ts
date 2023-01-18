(function main() {
  askQuestion();
  // ReferenceError

  let studentName = "Suzy";

  function askQuestion() {
    console.log(`${studentName}, do you know?`);
  }
})();
