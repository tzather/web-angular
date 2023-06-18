var http = require("http");
var https = require("https");
var fs = require("fs");
const url = require("url");

const port = 4250;
const headers = { "Content-Type": "application/json" };

function options(req, res) {
  res.writeHead(204);
  return res.end();
}

function get(req, res) {
  let url = "https:/" + req.url;
  let urlFile = `Data/${encodeURIComponent(req.url.substring(1))}.get.json`;
  if (fs.existsSync(urlFile)) {
    return readfile(urlFile, res);
  } else {
    https.get(url, (resp) => onResponse(resp, res, urlFile));
  }
}

function readfile(urlFile, res) {
  fs.readFile(urlFile, (err, data) => {
    if (err) {
      res.writeHead(404, headers);
      return res.end("404 Not Found");
    }
    res.writeHead(200, headers);
    res.write(data);
    return res.end();
  });
}

function onResponse(resp, res, urlFile) {
  let data = "";
  // A chunk of data has been received.
  resp.on("data", (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on("end", () => {
    fs.writeFile(urlFile, data, (err) => {
      fs.readFile(urlFile, (err, data) => {
        if (err) {
          res.writeHead(404, headers);
          return res.end("404 Not Found");
        }
        res.writeHead(200, headers);
        res.write(data);
        return res.end();
      });
    });
  });
}

function post(req, res) {
  let url = "https:/" + req.url;
  let urlFile = `Data/${encodeURIComponent(req.url.substring(1))}.post.json`;
  https.post(url, (resp) => onResponse(resp, res, urlFile));

  // fs.readFile(`mockapi${url.parse(req.url, true).pathname}.post.json`, (err, data) => {
  //   res.writeHead(200, headers);
  //   if (!err) {
  //     res.write(data); // return the json file if found
  //   }
  //   return res.end();
  // });
}

function put_delete(req, res) {
  res.writeHead(200, headers);
  return res.end();
}

http
  .createServer(function (req, res) {
    // headers for cors
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "*");

    switch (req.method.toUpperCase()) {
      case "OPTIONS":
        return options(req, res);
      case "GET":
        return get(req, res);
      case "POST":
        return post(req, res);
      default:
        return put_delete(req, res);
    }
  })
  .listen(port);

console.log(`** mockapi server is listening on http://localhost:${port} **`);
