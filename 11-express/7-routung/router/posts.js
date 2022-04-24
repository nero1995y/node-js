import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(201).send('GET: /posts');
});

router.post('/', (req, res) => {
  res.status(201).send('POST: /posts');
});
router.put('/:id', (req, res) => {
  res.status(201).send('PUT: /posts/:id');
});
router.delete('/', (req, res) => {
  res.status(201).send('DELETE: /post/:id');
});

export default router;
