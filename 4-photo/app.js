const path = require('path');
const os = require('os');
const fs = require('fs');
//  계힉
// 1. 사용자가 원하는 폴더의 이름을 받아온다
// 2. 그 폴더안에 video , captured, duplicated 폴더를 만든다
// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4 mov, png |aae, IMG_1234

//console.log(process.argv);
// node.js 프로세스가 시작될 떄 전달된 commnad-line agument
// 첫번째 요소는 process.execPath
// 두번째는 js 파일경로
// 나머지는 additional commend-line

const folder = process.argv[2];
// node app.js test 로추가로 전달된 인자
const workingDir = path.join(os.homedir(), 'Pictures', folder);

// 원하는 인자가 없다면?  근데 스트링인데 ! 붙나 ?
if (!folder || !fs.existsSync(workingDir)) {
  console.log('Please enter folder name in Pictures');
  return;
}

/*
 * os.homedir();
 * Returns the string path of the current user's home directory.
 * posix는 ${HOME} window는 userprfile를 참고하는듯
 *
 * path.join 문자열
 * 인자를 묶어주는듯
 */

console.log(workingDir);

// 2. 그 폴더안에 video , captured, dulicated 폴더를 만든다
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captuded');
const duplicatedDir = path.join(workingDir, 'duplicated');

// 싱크를 사용한 이유는 동기적으로 써줘야 하기 때문에
// 폴더 중복 체크
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일을 돌려서 해당하는  mp4\mov, png\ aae, IMG_1234 IMG_E1234
fs.promises
  .readdir(workingDir)
  .then(proceeFiles)
  // then(files => proceeFiles(files)) 이것은 위에 표현으로 줄일 수 있다
  .catch(console.log);

function proceeFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm; // 정규 표현식
  const match = file.match(regExp); // returnr값이 배열이기 때문에 불리언으로 바꿔주는 !!를 사용한다

  return !!match;
}

function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm; // 정규 표현식
  const match = file.match(regExp); // returnr값이 배열이기 때문에 불리언으로 바꿔주는 !!를 사용한다

  return !!match;
}

function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXX
  // 해당하지 않는 다면 빠르게 빠져나가게 하는 것이 좋다
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }

  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited));

  return !!found;
}

function move(file, targetDir) {
  //targetDir 풀경로니까 이름만 바꿔준다헤

  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);

  fs.promises //
    .rename(oldPath, newPath)
    .catch(console.error);
}
