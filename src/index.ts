import fs from 'node:fs';
import { ReadStream } from 'fs';

async function logChunks(readable: ReadStream) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readable = fs.createReadStream('text.txt', { encoding: 'utf8' });

logChunks(readable);
