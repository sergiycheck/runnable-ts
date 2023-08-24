import fs from 'node:fs';
import { nextTick } from 'node:process';


function main() {

  setTimeout(() => {
    console.log('timeout ');
  });

  setImmediate(() => console.log('immediate'));

  nextTick(() => console.log('nextTick'));

  Promise.resolve().then(() => console.log('promise'));

  fs.readFile('./package.json', (err, data) => {
    console.log('readFile');
    console.log(data.toString());
  });
  
}

main();