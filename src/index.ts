import assert from 'assert';
import { Readable } from 'stream';

import fs from 'fs';

var readableStream = fs.createReadStream('text.txt');
var writableStream = fs.createWriteStream('file2.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function (chunk) {
  writableStream.write(chunk);
});
