//Event eventEmitter
var events = require("events");
const EventEmitter = require("events");

var eventEmmiter = new events.eventEmmiter();

EventEmitter.on("speak", function (name) {
  console.log(name, "This file is open");
});
EventEmitter.emitt("speak", "peater");
