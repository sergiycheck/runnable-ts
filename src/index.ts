console.log('should run');

class LRUCache {
  private _capacity = 0;
  private _cache: Map<number, number>;
  private _lastKey: number;
  private keysHist: number[];

  constructor(capacity: number) {
    this._capacity = capacity;
    this._cache = new Map();
    this.keysHist = [];
  }

  get(key: number): number {
    let result: number;
    if (this._cache.has(key)) {
      result = this._cache.get(key);
    } else {
      result = -1;
    }

    this._lastKey = key;
    this.keysHist.push(this._lastKey);

    return result;
  }

  put(key: number, value: number) {
    const exceedsCapacity = this._cache.size + 1 > this._capacity;

    if (exceedsCapacity) {
      if (this._cache.size === 1) {
        const [first] = this._cache.keys();
        this._cache.delete(first);
      } else {
        let reversedKeysHist = this.keysHist.slice().reverse();
        let indexOfReversedLastKey = reversedKeysHist.indexOf(this._lastKey);
        reversedKeysHist.splice(indexOfReversedLastKey, 1);
        this.keysHist = reversedKeysHist.reverse();

        this._lastKey = this.keysHist[this.keysHist.length - 1];

        this._cache.delete(this._lastKey);
      }
    }

    this._cache.set(key, value);

    this._lastKey = key;
    this.keysHist.push(this._lastKey);

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

// actual [
//   null, null, 1,  null,
//   2,    null, -1, 3,
//   4
// ]

//expected [null,null,null,1,null,-1,null,-1,3,4]
