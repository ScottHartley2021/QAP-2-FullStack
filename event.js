const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.addListener("root", () => console.log(`This is the root page!!!`));

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
  myEmitter.emit("example");
};
//firstExample();
// fire the 'sample' event
console.log(`\nEMIT (fire) the 'sample' event`);
const firstSample = () => {
  myEmitter.emit("sample");
};
//firstSample();

module.exports = { myEmitter };
