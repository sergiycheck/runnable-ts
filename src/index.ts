function commitAction() {
  do {
    const commit = () => {
      return Math.random() > 0.5
        ? { code: Math.random() }
        : { code: undefined };
    };
    let result = commit();
    var done = result && result.code == 1;
  } while (!done);
}

function getStudents() {
  cache = {};

  try {
    // not really a block scope
    var records = fromCache('students');
  } catch (err) {
    // oops, fall back to a default
    var records: any = [];
  }
  return records;

  // ..
  var cache;
  function fromCache(name: string) {
    if (name in cache) return cache[name];
  }
}
