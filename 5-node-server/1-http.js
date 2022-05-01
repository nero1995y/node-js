const http = require('http');
// const http2 = require('http2'); // https
const fs = require('fs');

console.log(http.STATUS_CODES);
console.log(http.METHODS);

// createServer 는 RequestListener 바로 등록할 수 있다
// RequestListener는 req 요청이 오고, res 전달해준다
// type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;

const server = http.createServer((req, res) => {
  console.log('incoming');
  console.log(req.headers); // 헤더 정보
  console.log(req.httpVersion); // 1.1
  console.log(req.method); // GET
  console.log(req.url); // /

  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    console.log('??');

    fs.createReadStream('./html/index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/course.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }

  //res.end(); 이러면 스트림 꺼짐
});

server.listen(8080);
//
