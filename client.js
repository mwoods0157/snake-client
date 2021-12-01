const net = require("net");

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
    });
  
    conn.on("data", (data) => {
      // code that does something when the connection is first established
      console.log('Server says:', data);
    });
  
    return conn;
};

module.exports = {connect};

