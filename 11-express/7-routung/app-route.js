import express from 'express';
import postRouter from './router/posts.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); // REST API, Body
app.use(express.urlencoded({ extended: false })); //HTML Form 전달된 데이터를 바디안으로 파싱해줌  ssr 유용

app.use(express.static('public', option)); // public 안에있는 폴더 접근 옵션은 참고

app.use('/posts', postRouter);
app.use('/users', userRouter);
app.listen(8080);
