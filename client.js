const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "10.0.0.209",
    port: 50541
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