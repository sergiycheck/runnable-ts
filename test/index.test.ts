import { assert, expect, test, describe } from 'vitest';

describe('tests', function () {
  test('get/set tests', function () {
    const obj = { a: 1 };
    assert(obj.a === 1);
    obj.a = 2;
    assert(obj.a === 2);
  });
});
