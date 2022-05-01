const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');

// 하나의 파이프라인 스트림과스트림을 연결하여 물줄기를 연결해주는것
const piping = readStream.pipe(zlibStream).pipe(writeStream);

piping.on('finish', () => {
  console.log('done!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  //bad
  //fs.readFile('file.txt', (err, data) => {
  //  res.end(data);
  //});

  // good
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});

server.listen(3000);
