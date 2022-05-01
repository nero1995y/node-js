const fs = require('fs');

// 3
// rename(... , callback(error, data)) 2가지 인자로 error data
// try {renameSync(...)} catch(e) { } 따로 콜백함수를 전달하지 않는다. 이것이 끝날때까지 다음줄로 넘어가지 않는다. 항상 try...catch로 감싸줘야 한다
// sync를 이용할때는 가급적 사용하지 않는것이 좋고 1, 3 만 사용하는 것이 좋다.
// pormises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt'); // 파일이 없다면 멈출것이다.
} catch (error) {
  console.log(error);
}
console.log('helo');

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(`${error} error`);
});
console.log('helo');

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error);
//.catch((error) => console.error(error));
