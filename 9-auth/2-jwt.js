const jwt = require('jsonwebtoken');
const secret = 'qwjeqwje';
const token = jwt.sign(
  {
    id: 'userId',
    isAdmin: true,
  },
  secret,
  { expiresIn: 2 } // 유효기간
);
setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

console.log(token);
// 한번 변경하면 다른 토큰이 되므로  영원히 유효한토크
