#!/usr/bin/node

/*
 * A script that reads and prints the content of a file.
 * The first argument is the file path
 * The content of the file must be read in utf-8
 * If an error occurred during the reading, print the error object
*/

const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: node read-file.js <file-path>');
  process.exit(1);
}

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    console.log('File content:');
    console.log(data);
  }
});
