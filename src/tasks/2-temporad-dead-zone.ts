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
