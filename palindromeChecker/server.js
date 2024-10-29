const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/palindrome") {
    console.log(params['word'])
    if ("word" in params) {
      let inputWord = params['word']
      console.log(inputWord)
      if (inputWord.toLowerCase().split("").reverse().join('') === inputWord.toLowerCase()) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const objToJson = {
          input: inputWord.toLowerCase(),
          output: inputWord.toLowerCase()
            .split("")
            .reverse()
            .join(""),
          result: "is a Palindrome.",
          value: true,
        };
        res.end(JSON.stringify(objToJson));
      } else if (
        inputWord.toLowerCase().split("").reverse().join('') != inputWord.toLowerCase()
      ) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const objToJson = {
          input: params["word"].toLowerCase(),
          output: params["word"]
            .toLowerCase()
            .split("")
            .reverse()
            .join(""),
          result: "is not a Palindrome.",
          value: false,
        };
        res.end(JSON.stringify(objToJson));
      }
    }
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/css/normalize.css") {
    fs.readFile("css/normalize.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);