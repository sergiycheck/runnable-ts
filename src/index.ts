console.log('should run');

class LRUCache {
  private _capacity = 0;
  private _cache: Map<number, number>;

  constructor(capacity: number) {
    this._capacity = capacity;
    this._cache = new Map();
  }

  get(key: number): number {
    let result: number;
    if (this._cache.has(key)) {
      // when we call the 'get' method, push the key to
      // the end of the queue, as we just accessed it.
      result = this._cache.get(key);

      this._cache.delete(key);
      this._cache.set(key, result);
    } else {
      result = -1;
    }

    return result;
  }

  put(key: number, value: number) {
    const cacheContainsKey = this._cache.has(key);
    const exceedsCapacity = this._cache.size + 1 > this._capacity;

    if (cacheContainsKey) {
      this._cache.delete(key);
    } else if (exceedsCapacity) {
      const firstValueFromCache = this._cache.keys().next().value;
      this._cache.delete(firstValueFromCache);
    }

    this._cache.set(key, value);

    return null;
  }
}

var obj = new LRUCache(2);

const returnedValues = [];

[[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]].forEach((item) => {
  let returnedVal: number;
  if (item.length === 1) {
    const [el] = item;
    returnedVal = obj.get(el);
  } else if (item.length === 2) {
    const [key, val] = item;
    returnedVal = obj.put(key, val);
  }

  returnedValues.push(returnedVal);
});

console.log(returnedValues);

//expected [null,null,null,1,null,-1,null,-1,3,4]
