const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

fsPromises
  .readdir('./test') //
  .then((files) => {
    const duplicate = makeDirectory(files);
    play(files, duplicate);
  })
  .catch(console.error);

// 파일 중복 여부 체크
function readDirertory(files) {
  const duplicated = files.filter((file) => {
    return file.indexOf('duplicated') != -1;
  });

  return duplicated;
}

//파일이 없으면 생성
function firstMakeDirectory(duplicated) {
  if (duplicated.length == 0) {
    fs.promises
      .mkdir(path.join(__dirname, '/test/duplicated'))
      .then(console.log('don!'))
      .catch(console.error);

    return 'duplicated';
  } else {
    return duplicated;
  }
}

function makeDirectory(files) {
  return firstMakeDirectory(readDirertory(files));
}

//읽기
function readFilesJpg(files) {
  const jpg = files.filter((file) => {
    return file.indexOf('jpg') != -1;
  });

  return jpg;
}

// 읽은 파일복사
function copy(findJpg, duplicate) {
  findJpg.forEach((fileName) => {
    const rd = fs.createReadStream(`test/${fileName}`);
    const wr = fs.createWriteStream(`test/${duplicate}/${fileName}`);
    rd.pipe(wr);
  });
}

// 파일 읽고 복사완성하는 부분
function play(files, duplicate) {
  copy(readFilesJpg(files), duplicate);
}
