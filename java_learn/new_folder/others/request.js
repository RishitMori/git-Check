const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
request("https://gujcovid19.gujarat.gov.in/", function (error, response, html) {
  if (error) {
    console.error("error:", error); // Print the error if one occurred
  } else {
    handleHtml(html); // Print the HTML for the Google homepage.
  }
});
console.log("hello world");

function handleHtml(html) {
  let selTool = cheerio.load(html);
  let array = selTool("h3");
  for (let i = 0; i < array.length; i++) {
    let data = selTool(array[i]).text();
  }
}
