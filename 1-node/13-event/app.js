const EventEmitter = require('events');
const emitter = new EventEmitter();

// 커스텀 콜백함수 등록 원하는 만큼 가능
// 특정 이벤트 발생 가능 node.js 자체적으로 사용하고 있다.

const callback1 = (args) => {
  console.log('first callback-', args);
};

emitter.on('nero', callback1);

emitter.on('nero', (args) => {
  console.log('second callback-', args);
});

emitter.emit('nero', { message: 1 });
emitter.emit('nero', { message: 2 });
emitter.removeAllListeners();
emitter.emit('nero', { message: 3 });
