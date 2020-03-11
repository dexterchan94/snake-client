const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "192.168.88.177",
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: DEX");
    // conn.write("Move: up");
  });



  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};