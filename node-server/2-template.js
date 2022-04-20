const http = require('http');
// const http2 = require('http2'); // https
const fs = require('fs');
const ejs = require('ejs');

const name = 'nero';
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    //{name: name} key value가 같으면 생략가능
    ejs
      .renderFile('./template/index.ejs', { name })
      .then((data) => res.end(data));
  } else if (url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile('./template/not-found.ejs', { name })
      .then((data) => res.end(data));
  }

  //res.end(); 이러면 스트림 꺼짐
});

server.listen(8080);
//
