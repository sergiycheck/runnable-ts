import fs from 'node:fs';

function main() {
  setTimeout(() => {
    console.log('timeout ');
  });

  Promise.resolve().then(() => console.log('promise'));

  fs.readFile('./package.json', (err, data) => {
    console.log('readFile');
    console.log(data.toString());
  });
  
}

main();