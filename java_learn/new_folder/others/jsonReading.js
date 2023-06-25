import fs from "fs";
import path from "path";

let c = fs.readFileSync("./example.json");
console.log(c);
let data = JSON.parse(c); // convert binary into array of objects
console.log(data[0]);
data.push({
  name: "faiza",
  age: 20,
  surname: "Mori",
  school: "Gnyan Dham School",
});

let stringdata = JSON.stringify(data);
fs.writeFileSync("./example.json", stringdata);

// //using require

// let fs = require("fs");
// var data = require("./example.json");
// data.push({
//   name: "aaa",
//   age: 20,
//   surname: "Mori",
//   school: "Gnyan Dham School",
// });
// let stringdata = JSON.stringify(data);
// fs.writeFile("./example.json", stringdata, dd);
// function dd(err) {
//   if (err) console.log(err);
//   else {
//     console.log("successfully added");
//   }
// }
