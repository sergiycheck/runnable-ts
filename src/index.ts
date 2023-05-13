import { readFileSync, createReadStream } from 'node:fs';

// const fileName = 'package.json'
const fileName = '5mb.txt';

// console.log(readFileSync(fileName).toString('utf-8'));

// const readStream = createReadStream(fileName);

// let allChunks = [];
// readStream.on('data', (chunk) => {
//   console.log('chunk', chunk);
//   console.log(Buffer.byteLength(chunk));
//   allChunks.push(chunk);
// });

// readStream.on('close', () => console.log('end'));
