import cookieParser from 'cookie-parser'; // 쿠키정보 보는 모듈
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // for options request
  credentials: true, // Access-Control-Allow-Credentials: true
};

app.use(helmet());

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  //req.cookies.yammy;
  res.send('Welsomex!');
});

app.listen(8080);
