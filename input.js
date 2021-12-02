const { moveKeys, msgKeys } = require('./constants');
let moving;
let speed = 100;
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
    for (const [key, value] of Object.entries(msgKeys)) {
        if (data === key) {
            connection.write(value);
        }
    }
    for (const [key, value] of Object.entries(moveKeys)) {
        if (data === key) {
            clearInterval(moving);
            moving = setInterval(() => {
                connection.write(value);
            }, speed);
        }
    }
    if (data === '=') {
        connection.write(`Say: speed: ${Math.round(1000 / (speed * 10)) / 10} sq/s`);
        speed -= 5;
    }
    if (data === '-') {
        connection.write(`Say: speed: ${Math.round(1000 / (speed * 10)) / 10} sq/s`);
        speed += 5;
    }
};

module.exports = {setupInput};