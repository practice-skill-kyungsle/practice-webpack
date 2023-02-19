const getFirstModule = require("./firstModule.js");
const getSecondModule = require("./secondModule.js");
document.getElementById("root").appendChild(getFirstModule());
document.getElementById("root").appendChild(getSecondModule());
