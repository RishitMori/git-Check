let fs = require("fs");
let utf8decoder = new TextDecoder();
let buffer = fs.readFileSync("os.js");
let path = require("path");
console.log(utf8decoder.decode(buffer));

// fs.mkdirSync("start_directory");
fs.appendFileSync("start_directory/temp.txt", "hello world");

// delete a directory
// let content = fs.readdirSync("start_directory");
// for (let i = 0; i < content.length; i++) {
//   fs.unlinkSync("start_directory/" + content[i]);
// }
// fs.rmdirSync("start_directory");

let flag = fs.existsSync("os.js");
console.log(flag);
console.log(__dirname);

// check if it is a dir or file
let checkDirOrFile = fs.lstatSync(__dirname + "\\os.js");
console.log(checkDirOrFile.isFile());
// console.log(checkDirOrFile);

// fs.mkdirSync("lectureFolder");
for (let i = 0; i < 10; i++) {
  fs.writeFileSync(
    path.join("lectureFolder", `lecture${i}.txt`),
    `lecture${i}`
  );
}
fs.writeFileSync(
  "lectureFolder/" + "readme.md",
  "#file where content is store"
);
let pathResolve = path.join("lectureFolder", "lecture2.txt");
console.log(pathResolve);
console.log(fs.readFileSync(pathResolve));
