type Executor<T> = (
  resolve: (value: T | PromiseLike<T>) => void,
  reject: (reason?: any) => void
) => void;

type ResolveFunction<T> = (value: T | PromiseLike<T>) => void;
type RejectFunction = (reason?: any) => void;

enum PromiseState {
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export class MyPromise<T> {
  private state: PromiseState = PromiseState.Pending;
  private value: T | null = null;
  private reason: any = null;
  private onFulfilledCallbacks: Array<ResolveFunction<T>> = [];
  private onRejectedCallbacks: Array<RejectFunction> = [];

  constructor(executor: Executor<T>) {
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  private resolve(value: T | PromiseLike<T>): void {
    if (this.state === PromiseState.Pending) {
      // setTimeout(() => {
      this.state = PromiseState.Fulfilled;
      this.value = value as T;
      this.onFulfilledCallbacks.forEach((callback) => callback(this.value!));
      // });
    }
  }

  private reject(reason: any): void {
    if (this.state === PromiseState.Pending) {
      // setTimeout(() => {
      this.state = PromiseState.Rejected;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
      // });
    }
  }

  public then<TResult>(
    onFulfilled?: (value: T) => TResult | PromiseLike<TResult>,
    onRejected?: (reason: any) => TResult | PromiseLike<TResult>
  ): MyPromise<TResult> {
    return new MyPromise<TResult>((resolve, reject) => {
      if (this.state === PromiseState.Fulfilled) {
        // setTimeout(() => {
        try {
          const result = onFulfilled
            ? onFulfilled(this.value!)
            : (this.value as unknown as TResult);

          resolve(result);
        } catch (error) {
          reject(error);
        }
        // });
      } else if (this.state === PromiseState.Rejected) {
        // setTimeout(() => {
        try {
          const result = onRejected
            ? onRejected(this.reason)
            : (this.reason as unknown as TResult);

          reject(result);
        } catch (error) {
          reject(error);
        }
        // });
      } else {
        this.onFulfilledCallbacks.push((value) => {
          try {
            const result = onFulfilled
              ? onFulfilled(value as any)
              : (value as unknown as TResult);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectedCallbacks.push((reason) => {
          try {
            const result = onRejected
              ? onRejected(reason)
              : (reason as unknown as TResult);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }

  public catch<TResult>(
    onRejected?: (reason: any) => TResult | PromiseLike<TResult>
  ): MyPromise<TResult> {
    this.state = PromiseState.Rejected;
    return this.then(undefined, onRejected);
  }

  public finally(onFinally?: () => void): MyPromise<T> {
    return new MyPromise<T>((resolve, reject) => {
      const handler = () => {
        if (onFinally) onFinally();
        if (this.state === PromiseState.Fulfilled) {
          resolve(this.value as T);
        } else if (this.state === PromiseState.Rejected) {
          reject(this.reason);
        }
      };

      if (this.state === PromiseState.Pending) {
        this.onFulfilledCallbacks.push(handler);
        this.onRejectedCallbacks.push(handler);
      } else {
        setTimeout(handler);
      }
    });
  }
}
