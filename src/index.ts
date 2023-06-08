import * as util from 'util';
import * as stream from 'stream';
import * as fs from 'fs';
import { once } from 'events';
import assert from 'assert';

const finished = util.promisify(stream.finished);

async function writeIterableToFile(iterable, filePath) {
  const writable = fs.createWriteStream(filePath, { encoding: 'utf8' });

  for await (const chunk of iterable) {
    if (!writable.write(chunk)) {
      await once(writable, 'drain');
    }
  }

  writable.end();

  await finished(writable);
}

await writeIterableToFile(['One', ' line of text.\n'], 'log.txt');

assert.equal(
  fs.readFileSync('log.txt', { encoding: 'utf8' }),
  'One line of text.\n'
);
