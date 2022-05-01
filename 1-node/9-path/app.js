const path = require('path');

// POSIX (Unix: Max, Linux): 'User/temp/myfile.html'
// window: 'C:\\temp\\myfile.htm;'
console.log(__dirname);
console.log(__filename);

console.log(path.sep); //구분자
console.log(path.delimiter); //환경 변수 구분자

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));
console.log('=================================');

// dirname
console.log(path.dirname(__filename));

// extension 확장자
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);

parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute 절대경로면 ture 상대면 false
console.log('isAbsolute?', path.isAbsolute(__dirname)); //User/
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize - 경로에서 에러가 이상하면 알아서  고쳐줌
console.log(path.normalize('./folder///////sub'));

// join 운영체제 별로 잘 동작하게 만들어라 !
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
