const EventEmitter = require('events');

//const emitter = new EventEmitter();
// 클래스로 만들어 리펙토링 해보자

class Logger extends EventEmitter {
  // log라는 함수를 시작과 끝을 알 수 가 있다
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;
