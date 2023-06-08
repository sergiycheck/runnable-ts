import { pipeline } from 'stream';
import fs from 'fs';
import zlib from 'zlib';

pipeline(
  fs.createReadStream('text.txt'),
  zlib.createGzip(),
  fs.createWriteStream('text.txt.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);
