import { readFileSync, createReadStream } from 'fs';

let pathToFile = 'image-text.txt';

console.log(readFileSync(pathToFile).toString('utf-8'));

const rs = createReadStream(pathToFile);
rs.setEncoding('utf-8');

rs.on('data', (chunk) => {
  console.log(chunk);
  console.log(Buffer.byteLength(chunk));
});
