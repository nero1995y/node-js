const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log', (event) => {
  console.log(event);
});

emitter.log(() => {
  console.log('......doing somthing');
});

//많이 하는 실수는 emiter 을 새로만들어서 log 를 호출해서 한다 이렇게 될 경우에
// 다른 파일에 이미터와는 전혀 다르다.
//emmiter.on('log', (evnet)=> {
//    console.log(evnet);
//})

//객체 내에서 이벤트 와 다르다 라는 포인트를 기억하자
