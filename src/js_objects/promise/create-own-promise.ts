export class MyPromise {
  callBackHandlers = [];
  value = undefined;

  constructor(executor) {
    const resolve = (value) => {
      this.value = value;
      this.callBackHandlers.forEach(this.handle);
    };

    setTimeout(() => {
      this.callBackHandlers.push(executor);
      executor(resolve);
    }, 0);
  }

  handle(callBackHandler) {
    if (typeof callBackHandler.onPromiseFulfilled == 'function') {
      callBackHandler.onPromiseFulfilled(this.value);
    }
  }

  then(callBackOnFulfilled) {
    this.callBackHandlers.push(callBackOnFulfilled);
    return this;
  }
}
