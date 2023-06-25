let c = require("child_process");
let d = require("http");
d.createServer(function (req, res) {});

// let child = c.exec("start chrome http://www.google.com");

let output = c.execSync("node os.js");
console.log(typeof output);
