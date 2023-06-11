import { assert, expect, test, describe } from 'vitest';
import { undoRedo } from '../src';

describe('tests', function () {
  test('get/set tests', function () {
    var obj = {
      x: 1,
      y: 2,
    };

    var unRe = undoRedo(obj);

    assert.deepEqual(
      unRe.get('x'),
      1,
      'The get method returns the value of a key'
    );
    unRe.set('x', 3);
    assert.deepEqual(
      unRe.get('x'),
      3,
      'The set method change the value of a key'
    );
  });

  test('simple undo', function () {
    var obj = {
      x: 1,
      y: 2,
    };

    var unRe = undoRedo(obj);
    unRe.set('y', 10);
    assert.deepEqual(
      unRe.get('y'),
      10,
      'The get method returns the value of a key'
    );
    unRe.undo();
    assert.deepEqual(
      unRe.get('y'),
      2,
      'The undo method restores the previous state'
    );
    try {
      assert.throws(unRe.undo);
    } catch (e) {
      assert.deepEqual(unRe.get('y'), 2);
    }
  });

  test('simple redo', function () {
    var obj = {
      x: 1,
      y: 2,
    };

    var unRe = undoRedo(obj);
    unRe.set('y', 10);
    assert.deepEqual(
      unRe.get('y'),
      10,
      'The get method returns the value of a key'
    );
    unRe.undo();
    assert.deepEqual(
      unRe.get('y'),
      2,
      'The undo method restores the previous state'
    );
    unRe.redo();
    assert.deepEqual(
      unRe.get('y'),
      10,
      'The undo method restores the previous state'
    );
    try {
      assert.throws(unRe.redo);
    } catch (e) {
      assert.deepEqual(unRe.get('y'), 10);
    }
  });

  test('undo/redo', function () {
    var obj = {
      x: 1,
      y: 2,
    };

    var unRe = undoRedo(obj);
    unRe.set('y', 10);
    unRe.set('y', 100);
    unRe.set('x', 150);
    unRe.set('x', 50);
    assert.deepEqual(
      unRe.get('y'),
      100,
      'The get method returns the value of a key'
    );
    assert.deepEqual(
      unRe.get('x'),
      50,
      'The get method returns the value of a key'
    );
    unRe.undo();
    assert.deepEqual(
      unRe.get('x'),
      150,
      'The undo method restores the previous state'
    );
    assert.deepEqual(unRe.get('y'), 100, 'The y key stays the same');
    unRe.redo();
    assert.deepEqual(unRe.get('x'), 50, 'Undo the x value');
    assert.deepEqual(unRe.get('y'), 100, 'The y key stays the same');
    unRe.undo();
    unRe.undo();
    assert.deepEqual(unRe.get('x'), 1, 'Undo the x value');
    assert.deepEqual(unRe.get('y'), 100, 'The y key stays the same');
    unRe.undo();
    unRe.undo();
    assert.deepEqual(unRe.get('y'), 2, 'Undo the y value');
    assert.deepEqual(unRe.get('x'), 1, 'The x key stays the same');
    try {
      assert.throws(unRe.undo);
    } catch (e) {
      assert.deepEqual(unRe.get('y'), 2, 'There is nothing to undo');
    }
    unRe.redo();
    unRe.redo();
    unRe.redo();
    unRe.redo();
    assert.deepEqual(unRe.get('y'), 100, 'y key redo state');
    assert.deepEqual(unRe.get('x'), 50, 'y key redo state');
    try {
      assert.throws(unRe.redo);
    } catch (e) {
      assert.deepEqual(unRe.get('y'), 100, 'There is nothing to redo');
    }
  });

  test('new key', function () {
    var obj = {
      x: 1,
      y: 2,
    };

    var unRe = undoRedo(obj);
    unRe.set('z', 10);
    assert.deepEqual(unRe.get('z'), 10, 'A new key has been added');
    unRe.undo();
    assert.deepEqual(unRe.get('z'), undefined, 'The z key should not exist');
    unRe.redo();
    assert.deepEqual(unRe.get('z'), 10, 'A new key has been added');
  });

  test('delete key', function () {
    var obj = {
      x: 1,
      y: 2,
    };

    var unRe = undoRedo(obj);
    unRe.del('x');
    assert.deepEqual(unRe.get('x'), undefined, 'The x key should not exist');
    assert.isTrue(!obj.hasOwnProperty('x'), 'The x key should be deleted');
    unRe.undo();
    assert.deepEqual(unRe.get('x'), 1, 'A new key has been added');
    unRe.redo();
    assert.deepEqual(unRe.get('x'), undefined, 'The x key should not exist');
    assert.isTrue(!obj.hasOwnProperty('x'), 'The x key should be deleted');
  });

  test('all mixed tests', function () {
    var obj = {};

    var unRe = undoRedo(obj);

    assert.deepEqual(obj, {}, 'The obj object has no keys');
    unRe.set('x', 5);
    assert.deepEqual(unRe.get('x'), 5, 'x key has been added');
    unRe.set('y', 10);
    assert.deepEqual(unRe.get('y'), 10, 'y key has been added');
    unRe.set('y', 8);
    assert.deepEqual(unRe.get('y'), 8, 'y key has change its value');
    unRe.del('y');
    assert.deepEqual(unRe.get('y'), undefined, 'y key should not exist');
    unRe.undo();
    assert.deepEqual(unRe.get('y'), 8, 'y key exists');
    unRe.undo();
    assert.deepEqual(unRe.get('y'), 10, 'y key has 10 value');
    unRe.undo();
    assert.deepEqual(unRe.get('y'), undefined, 'y key should not exist');
    unRe.undo();
    assert.deepEqual(unRe.get('x'), undefined, 'x key should not exist');
    unRe.redo();
    unRe.redo();
    unRe.redo();
    assert.deepEqual(obj, { x: 5, y: 8 }, 'Redo all actions');
    unRe.redo();
    unRe.set('x', 55);
    assert.deepEqual(obj, { x: 55 }, 'Redo three actions');
    unRe.undo();
    assert.deepEqual(obj, { x: 5 }, 'Redo one actions');
  });

  test('set/del-> redo tests', function () {
    var obj = {};

    var unRe = undoRedo(obj);
    unRe.set('x', 5);
    unRe.set('y', 6);
    assert.deepEqual(obj, { x: 5, y: 6 }, 'two set calls');
    unRe.undo();
    assert.deepEqual(obj, { x: 5 }, 'one undo call');
    unRe.set('y', 66);
    assert.deepEqual(obj, { x: 5, y: 66 }, 'one set call');

    try {
      assert.throws(unRe.redo);
    } catch (e) {
      assert.deepEqual(obj, { x: 5, y: 66 }, 'The objects does not change');
    }

    unRe.undo();
    assert.deepEqual(obj, { x: 5 }, 'one undo call');
    unRe.redo();
    assert.deepEqual(obj, { x: 5, y: 66 }, 'one redo call');
  });
});
