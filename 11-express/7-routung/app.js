import express from 'express';

const app = express();

app.use(express.json());

app
  .route('/posts')
  .get((req, res, next) => {
    res.status(201).send('GET: /posts');
  })
  .post((req, res) => {
    res.status(201).send('POST: /post');
  });
// .post('/posts)체이닝할때 더이상 경로는 생략가능

app
  .route('/posts/:id')
  .app.put((req, res) => {
    res.status(201).send('PUT: /posts/:id');
  })
  .app.delete((req, res) => {
    res.status(201).send('DELETE: /post/:id');
  });

app.listen(8080);
