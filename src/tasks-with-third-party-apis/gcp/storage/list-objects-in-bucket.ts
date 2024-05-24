import { Storage } from '@google-cloud/storage';

export async function listFiles() {
  const storage = new Storage();

  const [files] = await storage.bucket('gbl_files').getFiles();

  files.forEach(file => {
    console.log(file.name);
    console.log(file.metadata);
  })
}
