const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  //highWaterMark: 8, // 64 kbytes
  //encoding: 'utf-8',
  // 한번에 옮기는 양
});
// on이라는 함수를 사용해서  이벤트마다 원하는 콜백함수를 등록해 놓으면 처리 할 수 있다. 자기 차체 this 를 리턴한다
//

// on(event: 'data', listener: (chunk: Buffer | string) => void): this;
// chunk 덩어리가 오면 문자열일수도잇고 오면
const data = [];

readStream.on('data', (chunck) => {
  //console.log(chunck);
  data.push(chunck);
});

// 덩어리 출력 !
readStream.on('end', () => {
  console.log(data.join(''));
});

readStream.on('error', (error) => {
  console.log(error);
});

// on은 데이터가 발생할때마다 하는것이고 once는 처음한번만

//refactor
fs.createReadStream('./file.txt', {})
  .on('data', (chunck) => {
    data.push(chunck);
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', (error) => {
    console.log(error);
  });
