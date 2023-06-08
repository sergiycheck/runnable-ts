import assert from 'assert';
import { Readable } from 'stream';

import fs from 'fs';

var data = '';

var readerStream = fs.createReadStream('text.txt'); //Create a readable stream

readerStream.setEncoding('utf-8'); // Set the encoding to be utf8.

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
  data += chunk;
});

readerStream.on('end', function () {
  console.log(data);
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log('Program Ended');
