import { assert, expect, test, describe } from 'vitest';

import { matchDomain } from './match-domain';

describe('match domain', function () {
  test('sample 1', function () {
    var url = 'https://www.google.com',
      out = 'google';

    expect(matchDomain(url)).toEqual(out);
  });

  test('sample 2', function () {
    var url = 'http://google.com',
      out = 'google';

    expect(matchDomain(url)).toEqual(out);
  });

  test('sample 3', function () {
    var url = 'http://google.co.jp',
      out = 'google';

    expect(matchDomain(url)).toEqual(out);
  });

  test('sample 4', function () {
    var url = 'www.xakep.ru',
      out = 'xakep';

    expect(matchDomain(url)).toEqual(out);
  });

  test('sample 5', function () {
    var url = 'https://youtube.com',
      out = 'youtube';

    expect(matchDomain(url)).toEqual(out);
  });
});
