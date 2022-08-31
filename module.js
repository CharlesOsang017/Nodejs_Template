const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative");
require("./grenade");

console.log(data);

sayHi("Charles");
sayHi(names.john);
sayHi(names.peter);
