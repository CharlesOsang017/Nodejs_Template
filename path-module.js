const path = require("path");

//returns your specific platform
console.log(path.sep);

//joins a sequence
const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);
