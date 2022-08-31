const os = require("os");
//returns about the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

//showing the current os
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
