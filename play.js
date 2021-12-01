//const net = require("net");
const {connect} = require('./client');

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    //handleUserInput is the callback
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = function () {
    //If the data is Ctrl + c, exit the process
    if (key === '\u0003') {
        process.exit();
      }
  };


console.log("Connecting ...");
connect();