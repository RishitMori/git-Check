const request = require("request");
const cheerio = require("cheerio");
let url =
  "https://www.espncricinfo.com/series/australia-in-india-2022-23-1348637/india-vs-australia-1st-odi-1348656/full-scorecard";
request(url, function (error, response, body) {
  if (error) {
    console.error("error:", error); // Print the error if one occurred
  } else {
    webscrapping(body);
  }
});
console.log("\n");
function webscrapping(body) {
  let $ = cheerio.load(body);
  let array = $(
    ".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-mb-2"
  );
  for (let i = 0; i < array.length; i++) {
    let hasclass = $(array[i]).hasClass("ds-opacity-50");
    if (hasclass === false) {
      let c = $(array[i])
        .find(".ds-text-tight-l.ds-font-bold.ds-text-typo.ds-block.ds-truncate")
        .attr("href");
      console.log(c);
    }
  }
  //   let whoWonText = $(array[0]).text();
  //   let whoWon = whoWonText.split(" ");
  //   console.log(whoWon[0]);
}
