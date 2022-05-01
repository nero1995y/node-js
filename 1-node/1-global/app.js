const fs = require('fs');

console.log(global);

// 전역 객체

global.hello = () => {
  global.console.log('hello');
};

global.hello();
hello();
