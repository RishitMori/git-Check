let fs = require("fs");
console.log("starting");

fs.readFile("temp1.txt", function (err, data) {
  console.log("" + data);
});
console.log("end");
console.log("other task");
