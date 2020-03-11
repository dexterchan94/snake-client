const handleUserInput = (key) => {

  // exits game when ctrl + c is pressed
  if (key === '\u0003') {
    console.log(`Exiting...`);
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };