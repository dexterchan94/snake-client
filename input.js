let connection;

const handleUserInput = (key) => {

  if (key === 'w') {
      connection.write("Move: up");
  }

  if (key === 'a') {
      connection.write("Move: left");
  }

  if (key === 's') {
      connection.write("Move: down");
  }

  if (key === 'd') {
      connection.write("Move: right");
  }

  if (key === 'm') {
    connection.write("Say: i am a snek");
  }



  // exits game when ctrl + c is pressed
  if (key === '\u0003') {
    console.log(`Exiting...`);
    process.exit();
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };