console.log('logging...');
console.clear();

//log level
console.log('log'); //개발
console.info('info'); // 정보
console.warn('warn'); // 발생하면 안되지만 경보
console.error('error'); // 에러 , 사용자 에러, 시스템 에러

//assert
console.assert(2 === 3, 'not same!');
console.assert(2 == 2, 'same');

// pirnt object
const student = { name: 'simso', age: 20, company: { name: 'AC' } };
console.log(student);
console.log(student);
console.dir(student, { showHidden: true, color: false, depth: 0 });
// 중첩된 오브젝트를 얼마나 보여줄 것인지

// measuring time 성능 측정
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}

console.timeEnd('for loop');

// conunting
function a() {
  console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
  console.trace();
}
f1();
