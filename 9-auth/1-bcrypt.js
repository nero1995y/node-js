const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password);
// 길이
console.log(`password: ${password}, hashed: ${hashed}`);

// 지금만 동기
const result = bcrypt.compareSync('abcd1234', hashed);
console.log(result);
