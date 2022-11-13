console.log(123);
const http = require("node:http");
const fs = require("node:fs");

// fs.createReadStream("./index.html")
// const html = fs.readFileSync("./index.html");
const server = http.createServer((req, res) => {
  // res.end(html);
  let size;
  // const stat = fs.stat("./index.html", (err, stats) => {
  //   console.log("stats", stats);
  //   size = stats.size();
  // });
  const stat = fs.statSync("./index.html");
  console.log("stat----", stat);
  console.log("size---", stat.size);
  res.setHeader("Content-Length", stat.size);
  fs.createReadStream("./index.html").pipe(res);
});
server.listen(3000, () => {
  console.log("Listening 3000");
});
