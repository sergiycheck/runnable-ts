import { MyPromise } from './custom-promise';

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

describe('MyPromise{}', () => {
  it('Should maintain chain of then() operations', async () => {
    const spyFn = vi.fn();

    new MyPromise((resolve) => {
      setTimeout(() => resolve(42), 100);
    })
      .then((x) => x * 2)
      .then((x) => x - 2)
      .then(spyFn);

    await delay(200);

    expect(spyFn).toHaveBeenCalledWith(82);
  });

  it('Should catch()', async () => {
    const spyFn = vi.fn();

    new MyPromise((_, reject) => {
      reject(42);
      return 41;
    })
      .then((x) => x - 2)
      .catch(spyFn);

    await delay(200);

    expect(spyFn).toHaveBeenCalledWith(42);
  });

  it('Should always run finally()', async () => {
    const spyFn = vi.fn();

    new MyPromise((resolve) => {
      resolve(42);
    })
      .then((x) => x * 2)
      .then((x) => x - 2)
      .finally(spyFn);

    new MyPromise((_, reject) => {
      reject(42);
      return 41;
    })
      .then((x) => x - 2)
      .catch((x) => x + 2)
      .finally(spyFn);

    await delay(200);

    expect(spyFn).toHaveBeenCalledTimes(2);
  });
});
