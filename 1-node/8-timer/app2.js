console.log('code1');
console.time('timeout 0');
setTimeout(() => {
  console.log('setTimeout 0');
  console.timeEnd('timeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
  console.log('setImmediate');
});

console.log('cod3');
process.nextTick(() => {
  console.log('process.nextTick');
});
