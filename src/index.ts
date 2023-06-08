import assert from 'assert';
import { Readable } from 'stream';

import fs from 'fs';

var data = '';

var readableStream = fs.createReadStream('file.txt');
var data = '';
var chunk;

readableStream.on('readable', function () {
  while ((chunk = readableStream.read()) != null) {
    data += chunk;
  }
});

readableStream.on('end', function () {
  console.log(data);
});
