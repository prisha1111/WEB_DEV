//inbuilt modules
//posix->portable operating system interface
// const { unlink } = require('node:fs/promises');
// //iife function
// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('./something.txt');//deleted this txt
//unlink is for delete a file


// const { unlink } = require('node:fs');

// unlink('/tmp/hello', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });
// ---------------------------------------------------------
// const fs = require('node:fs');

// try {
//   const data = fs.readFileSync('./something.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
//reads something.txt




const fs = require('node:fs');

const content = 'Some content!';

fs.writeFile('./something.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

// flags ->left
// -----------------------------------------------------

// import fs from 'fs';
// import { pipeline } from 'node:stream/promises';
// import path from 'path';

// const fileUrl = 'https://www.gutenberg.org/files/2701/2701-0.txt';
// const outputFilePath = path.join(process.cwd(), 'moby.md');

// async function downloadFile(url, outputPath) {
//   const response = await fetch(url);

//   if (!response.ok || !response.body) {
//     throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
//   }

//   const fileStream = fs.createWriteStream(outputPath);
//   console.log(`Downloading file from ${url} to ${outputPath}`);

//   await pipeline(response.body, fileStream);
//   console.log('File downloaded successfully');
// }

// async function readFile(filePath) {
//   const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

//   try {
//     for await (const chunk of readStream) {
//       console.log('--- File chunk start ---');
//       console.log(chunk);
//       console.log('--- File chunk end ---');
//     }
//     console.log('Finished reading the file.');
//   } catch (error) {
//     console.error(`Error reading file: ${error.message}`);
//   }
// }

// try {
//   await downloadFile(fileUrl, outputFilePath);
//   await readFile(outputFilePath);
// } catch (error) {
//   console.error(`Error: ${error.message}`);
// }
