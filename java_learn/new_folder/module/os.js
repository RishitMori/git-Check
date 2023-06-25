let c = require("os");
console.log(c.uptime() / 3600 / 24);
console.log(c.platform());
console.log(c.arch());
console.log(c.networkInterfaces());
console.log(c.cpus());
console.log(c.freemem());

c.freemem();
