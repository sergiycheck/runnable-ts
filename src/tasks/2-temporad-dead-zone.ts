try {
  askQuestion();
  // ReferenceError

  let studentName = 'Suzy';

  function askQuestion() {
    console.log(`${studentName}, do you know?`);
  }
} catch (error) {
  console.error(error);
}

try {
  askQuestionVar();
  // ReferenceError

  var studentName = 'Suzy';

  function askQuestionVar() {
    console.log(`${studentName}, do you know?`);
  }
} catch (error) {
  console.error(error);
}
