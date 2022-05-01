const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 현재 코드 수행후 tesk Queue에 넣어달라
// 코드 다하고 0초있다 셋타임 수행해줘 뜻
// tesk Queue에 있는걸 무시하고 우선예약
setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
  console.log('for loop');
}
