//consumer
var myModule = require("./producer.js");

var myModuleInstance = new myModule();
console.log(myModuleInstance.hello()); // 'hello!'
console.log(myModuleInstance.goodbye()); // 'goodbye!'
