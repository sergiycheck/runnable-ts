export class CustomPromise {
  state: string;
  result: any;
  callbacks: any[];

  constructor(executor) {
    this.state = 'pending';
    this.result = null;
    this.callbacks = [];

    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      this.result = value;
      this.callbacks.forEach((callback) => {
        callback.onFulfill(value);
      });
    }
  }

  reject(error) {
    if (this.state === 'pending') {
      this.state = 'rejected';
      this.result = error;
      this.callbacks.forEach((callback) => {
        callback.onReject(error);
      });
    }
  }

  then(onFulfill, onReject) {
    return new CustomPromise((resolve, reject) => {
      this.callbacks.push({
        onFulfill,
        onReject,
        resolve,
        reject,
      });
    });
  }

  catch(onReject) {
    return this.then(null, onReject);
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally();
        return value;
      },
      (error) => {
        onFinally();
        throw error;
      }
    );
  }
}
