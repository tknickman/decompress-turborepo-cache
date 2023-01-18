#!/usr/bin/env node

const zlib = require("zlib");
const fs = require("fs");
const tar = require("tar");
const path = require("path");
const rimraf = require("rimraf");

// use with: node index.js <path>

// decode a buffer where the output size is not known
const fileName = process.argv[2];
const parsedFileName = path.parse(fileName);
const outputFileName = `${parsedFileName.name}.tar.gz`;
const outputDirectory = "./output";
const outputFilePath = path.join(outputDirectory, outputFileName);

console.log("1. cleaning output directory...");
rimraf.sync("./output/*", {}, (err) => {
  if (err) {
    throw err;
  }
});
console.log("done\n");
console.log("2. decompressing target...");
fs.createReadStream(fileName).pipe('unzstd').pipe(tar.extract(target));

console.log("done\n");



console.log("3. writing to output directory...");
fs.writeFile(outputFilePath, buffer, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("done\n");
  }
});
console.log(`file written to ${path.resolve(outputFilePath)}`);
