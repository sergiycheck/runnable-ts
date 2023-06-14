function getIncrementAndMessage() {
  let counter = 0;
  const increment = () => counter++;

  const getMessage = () => `counter is ${counter}`;

  return [increment, getMessage];
}

const [increment, getMessage] = getIncrementAndMessage();

increment();
increment();
console.log(getMessage());
