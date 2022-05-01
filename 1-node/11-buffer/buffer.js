// 전 챕터에서 파일을 따로 지정하지 않으면 적날하게 파일이 읽히는것을 볼 수 가있다.
// C나 C++ 버퍼가 익술 할 것이다.
// 버퍼라고 하는 것은 메모리에서 고정된 사이즈에 메모리 덩어리이다 Fixed-size chuck of memory
// array of integers, byte of data 바이트 자체의 data라고 보면 된다.
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf);
// 유니코드 <Buffer 48 69> H, I
console.log(buf.length);
// 2
// 배열로 접근하면 아스키코드 72, 105
console.log(buf[0]);
console.log(buf[1]);

// 인코딩을 전달할 수 있다 디폴트 utf-8
console.log(buf.toString());

// create  size가 2개인 버퍼를 만듬 메모리에서 사용가능한 덩어리를 찾아서 그 덩어리를 초기화 시켜줌
const buf2 = Buffer.alloc(2);

// 공간을 확보하지만 초기화 하지 않아서 좀 빠르긴함 fast
// 메모리를 사용중이라면 다른 값이 출력될 수 있음
buf2[0] = 72;
buf2[1] = 105;
const buf3 = Buffer.allocUnsafe(2);

// copy
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
