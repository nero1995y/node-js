const fs = require('fs').promises;

// read a file 버퍼 형태로 데이터를 읽어 온다.
// encoding 설정 가능
fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);

//writing a file
// 리턴이 void면 then 은 생략이 가능하다
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') //
  .catch(console.error);

// 덮어쓰기
fs.appendFile('./file.txt', 'Hello, Dream Coders! append :) ') //
  .catch(console.error);

// copy //비동기이므로 쓰기도전에 복사가 될수도 있다. 순서대로 작성해도 보장 되지 않고 than 안에서 수행해라.
fs.copyFile('./file.txt', './file-copy.txt') //
  .catch(console.error);

fs.appendFile('./file.txt', 'Hello, Dream Coders! append :) ') //
  .then(() => {
    fs.copyFile('./file.txt', './file-copyAndAppend.txt') //
      .catch(console.error);
  })
  .catch(console.error);

// folder
fs.mkdir('sub-folder').catch(console.error);

// floder read  String[]
fs.readdir('./').then(console.log).catch(console.error);

// point API는 사용할때 return . param 등 이 중요하다
