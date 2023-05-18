import fs from 'fs';
import { promisify } from 'util';

let pathToFile = 'test_files/naruto/naruto.txt';
let pathToClones = 'test_files/naruto/clones';

function readAndGet(path: string): Promise<string> {
  return new Promise((resolve) => {
    const rs = fs.createReadStream(pathToFile);
    rs.setEncoding('utf-8');

    let allChunks = '';
    rs.on('data', (chunk) => {
      allChunks = allChunks.concat(chunk.toString('utf-8'));
    });

    rs.on('end', () => resolve(allChunks));
  });
}

async function createFolderAndFiles(
  path: string,
  name: string,
  count: number,
  content: string
) {
  const promisedMkDir = promisify(fs.mkdir);

  await promisedMkDir(path, { recursive: true });

  for (let i = 0; i < count; i++) {
    const ws = fs.createWriteStream(`${path}/${name}-${i}`);
    ws.write(content);
    ws.end();
    console.log(`item ${i} created!`);
  }
}

const data = await readAndGet(pathToFile);

createFolderAndFiles(pathToClones, 'naruto-clone', 100, data);
