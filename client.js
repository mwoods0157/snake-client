const net = require("net");
const { uptime } = require("process");

const connect = function () {
    const conn = net.createConnection({
      host: '165.227.47.243',
      port: 50541,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    conn.on("connect", () => {
      // code that does something when the connection is first established
      console.log('Welcome everyone');
      conn.write('Name: MEW');
      conn.write('Move: up');
      //conn.write('Move: up');
    });
    setTimeout(() => {
        conn.write('Move: up')
    }, 5000);
    /*
    conn.on("connect", () => {
        // code that does something when the connection is first established
        conn.write("Move: up");
    }); */
  
    conn.on("data", (data) => {
      // code that does something when the connection is first established
      console.log('Server says:', data);
    });

  
    return conn;
};

module.exports = {connect};

