const fs = require("fs");
// define/extend an EventEmitter class
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
// initialize an new emitter object
const myEmitter = new MyEmitter();
// bind the 'example' event and set the function when event is emitted (fired)
myEmitter.addListener("events", () => console.log(`This is an event listener`));
myEmitter.on("events", () => console.log(`Event 1`));
myEmitter.on("events", () =>
  console.log(`my third 'example' bound emitter function`)
);
// bind the 'sample' event and set the function when event is emitted (fired)
myEmitter.on("sample", () =>
  console.log(`my first 'sample' bound emitter function`)
);
myEmitter.on("sample", () =>
  console.log(`my second 'sample' bound emitter function`)
);
// count how many listeners have been bound
console.log(
  `EXAMPLE: The 'example' event count: ` + myEmitter.listenerCount("example")
);
console.log(
  `SAMPLE: The 'sample' event count: ` + myEmitter.listenerCount("sample")
);
// what events have been bound
console.log(`Event names: ` + myEmitter.eventNames());
// fire the 'example' event
console.log(`\nEMIT (fire) the 'example' event`);
const firstExample = () => {
  myEmitter.emit("events");
};
firstExample();
// fire the 'sample' event
console.log(`\nEMIT (fire) the 'sample' event`);
const firstSample = () => {
  myEmitter.emit("sample");
};
firstSample();

function indexPage(path, res) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { Content_Type: "text/html" });
      res.end(data);
    }
  });
}
function aboutPage(path, res) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { Content_Type: "text/html" });
      res.end(data);
    }
  });
}
function helloPage(path, res) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { Content_Type: "text/html" });
      res.end(data);
    }
  });
}
function marvelPage(path, res) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { Content_Type: "text/html" });
      res.end(data);
    }
  });
}
function dcPage(path, res) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(200, { Content_Type: "text/html" });
      res.end(data);
    }
  });
}

module.exports = {
  indexPage,
  aboutPage,
  helloPage,
  marvelPage,
  dcPage,
};
