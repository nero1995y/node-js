const http = require('http');
// const http2 = require('http2'); // https
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
];
const server = http.createServer((req, res) => {
  const url = req.url; //what 클라이언트가
  const method = req.method; //how? action?

  if (url === '/course') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(courses));
    } else if (method === 'POST') {
      const body = [];
      req.on('data', (chnuk) => {
        console.log(chnuk);
        body.push(chnuk);
      });

      req.on('end', () => {
        const boadyStr = Buffer.concat(body).toString();
        const course = JSON.parse(boadyStr);
        courses.push(course);
        console.log(course);

        //서버응답
        res.writeHead(201);
        res.end();
      });
    }
  }
});
server.listen(8080);
//
