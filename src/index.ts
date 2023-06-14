function getIncrementAndMessage() {
  let counter = 0;
  const increment = () => counter++;

  let message = `counter is ${counter}`;

  const getMessage = () => message;

  return [increment, getMessage];
}

const [increment, getMessage] = getIncrementAndMessage();

increment();
increment();
console.log(getMessage());
