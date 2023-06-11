console.log('execution');

export function undoRedo(object) {
  let prev = [];
  let next = [];
  return {
    logState: function (operation) {
      console.log('operation', operation);
      console.log('prev', prev);
      console.log('next', next);
      console.log('object', object);
    },
    set: function (key, value) {
      next = [];
      prev.push([key, object[key]]);
      object[key] = value;

      this.logState(`set key: ${key}, value ${value}`);
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      next = [];
      prev.push([key, object[key]]);
      delete object[key];

      this.logState(`delete key: ${key}`);
    },
    undo: function () {
      const [key, value] = prev.pop();
      next.push([key, object[key]]); // why ?
      if (value) {
        object[key] = value;
      } else {
        delete object[key];
      }
      this.logState(`after undo`);
    },
    redo: function () {
      const [key, value] = next.pop();
      prev.push([key, object[key]]); // why ?
      if (value) {
        object[key] = value;
      } else {
        delete object[key];
      }
      this.logState(`after redo`);
    },
  };
}
