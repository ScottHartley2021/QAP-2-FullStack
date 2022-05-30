const { write } = require("fs");
const http = require("http");
const routes = require("./routes.js");

const server = http.createServer((req, res) => {
  res.writeHead(200, { Content_Type: "text/html" });
  //res.write("<html><body> It worked.</html>");
  switch (req.url) {
    case "/":
      console.log("root");
      routes.indexPage("./views/index.html", res);
      break;
    case "/hello":
      console.log("/hello");
      routes.helloPage("./views/hello.html", res);
      break;
    case "/about":
      console.log("/about");
      routes.aboutPage("./views/about.html", res);
      break;
    case "/marvel":
      routes.marvelPage("./views/marvel.html", res);
      break;
    case "/dc":
      routes.dcPage("./views/dc.html", res);
      break;
    default:
      console.log("/default");
      routes.fourofourPage("./views/fourofour.html", res);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
