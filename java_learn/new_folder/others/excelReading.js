let xlsx = require("xlsx");
let fs = require("fs");
let data = require("./example.json");
console.log(data);

// new workbook
let newwb = xlsx.utils.book_new();

// json data -> excel format convert
let newWs = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(newwb, newWs, "s heet");
xlsx.writeFile(newwb, "abc.xlsx");
