import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  // 1.
  // const data = fs.readFileSync('/file.txt');
  // 동기이기 때문에 파일을 요청하는 순간 처리가된다
  // 바로 최종 미들웨어로 에러를 보내기 보다는 여기서 에러를 핸들링하는 것이 좋다
  // 동기적인 함수를 호출하는 경우에 , try catch해보자
  //2.try catch
  // try {
  //   const data = fs.readFileSync('/file.txt');
  // } catch (error) {
  //   res.status(404).send('File not found');
  // }

  //3. 비동기
  fs.readFile('/file.txt', (err, data) => {
    if (err) {
      res.status(404).send('File not found syns');
    }
  });
  // 비동기적인 파일을 다읽을떄 까지 기다렸다가 넘어가는것이 아니라  파일을 다 읽어지면 데이터를 두번째 인자로 처리해서 보내줘
  // 만약 아무것도 코드를 안만들고 err 를 처리해주지 않는다면 비동기는 마지막 핸들러에 포착 되지 않는다 두번쨰 인자로 이미 err받았기 때문이다
  // 그래서 err를 처리해줘야한다
  // 미들웨어 체인은 동기적으로 연결되어 있기 때문이다

  // 즉 err가 콜백으로 전달되었기 때문에 에러발생유무는 미들웨어 체인에서 확인할 길이없다
});

app.get('/file2', (req, res, next) => {
  // 1. 캐치 미루기
  //fsAsync.readFile('/file.txt').catch(next);
  //catch((error) => next(error) 전달된인자와 호출하는 인자가같으면 생략가능

  //2. 에러처리하기
  fsAsync
    .readFile('/file.txt')
    .catch((error) => res.status(404).send('File not found'));
});
// 에러를 던져 미들웨어를 호출하고

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file.txt');
  } catch (error) {
    res.status(404).send('File not found');
  }
  // 코드자체는 동기적이나 안정망에는 포착되지 않는다 프로미스로 리턴하기때문이다 함수앞에 에이싱크를 붙여주게 되면 함수내부부는 함수 자체는 프로미스로 감싸진다
  // 프로미스 내부에서 에러가 발생하는 것과 동일하다
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
  // 잘못된점 적절하지 못한 모호한 메세지를 보내줌
});

app.listen(8080);
