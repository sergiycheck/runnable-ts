import { assert, expect, test, describe } from 'vitest';
import { convertQueryToMap } from './convert-url-to-obj';

describe('convert url to obj', function () {
  test('sample 1', function () {
    var q =
        'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
      out = {
        user: {
          name: {
            firstname: 'Bob',
            lastname: 'Smith',
          },
          favoritecolor: 'Light Blue',
        },
      };

    expect(convertQueryToMap(q)).toEqual(out);
  });

  test('sample 2', function () {
    var q =
        'user.realname.veryrelal.name.firstname=Bob&user.name.lastname=Smith',
      out = {
        user: {
          realname: {
            veryrelal: {
              name: {
                firstname: 'Bob',
              },
            },
          },
          name: {
            lastname: 'Smith',
          },
        },
      };

    expect(convertQueryToMap(q)).toEqual(out);
  });
});
