// import express from 'express';
// const app = express();

// app.listen(8080);

// app.all('/api', (req, res, next) => {
//   console.log('all');
//   next();
// });
// // api 다음어떤 요청이든 이경로한해서만 수행

// app.use('/sky', (req, res, next) => {
//   console.log('use');
//   next();
// });
// // use는 /sky/* 모든 경로한해서 수행

// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('first');
//     //next('route'); // 현재 미들웨어 무시하고 다음 라우터로 넘어감
//     //next(new Error('error'));
//     if (true) {
//       return res.send('Hello');
//     }
//     res.send('Hello');
//     // 미들웨어는 한번 센드 보내면 다음 미들웨어를 보내지 않는다
//   },
//   (req, res, next) => {
//     console.log('first2');
//   }
// );
// // if 미들웨어를 작성할때 next를 하지 않는다면 서버가 죽는다 유념

// // 등록한 동일한 경로에 미들웨어를 등록할 수 가 있다
// app.get('/', (req, res, next) => {
//   console.log('second');
// });

// app.use((req, res, next) => {
//   res.status(404).send('Not available!');
// });
// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send('Sorry, try later!');
// });
// // 어플리케이션 클라이언트에게 에러를 다보여주는것은 안된다 그래서 항상 애플리케이션은 에러를
// // 처리해야 한다
// // 미들웨어는 설정 순서가 너무 중요하다
