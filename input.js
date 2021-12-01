const { connect } = require("http2");

let connection;

const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume(); 
    //handleUserInput is the callback
    stdin.on("data", data => handleUserInput(data));
    return stdin;
};

const handleUserInput = key => {
    //If the data is Ctrl + c, exit the process
    if (key === '\u0003') {
        process.exit();
    } 
    if (key === '\u0077') {
        return connection.write('Move: up')
    } 
    if (key === 'a') {
        return connection.write("Move: left");
    } 
    if (key === 's') {
        return connection.write("Move: down");
    } 
    if (key === 'd') {
        return connection.write("Move: right")
    }
};

module.exports = {setupInput};