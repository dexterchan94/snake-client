const { connect } = require("./client");

const handleUserInput = (key) => {

  // exits game when ctrl + c is pressed
  if (key === '\u0003') {
    console.log(`Exiting...`);
    process.exit();
  }
};

const setupInput = (data) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', data);

  return stdin;
};


console.log("Connecting...");
connect();
setupInput(handleUserInput);

