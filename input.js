let connection;

let intervalId;
let lastMove;

function sendDelayedCommand(direction) {
  if(!(direction === "up" && lastMove === "down") && !(direction === "left" && lastMove === "right") && !(direction === "right" && lastMove === "left") && !(direction === "down" && lastMove === "up")) {
    clearInterval(intervalId);
    lastMove = direction;
    intervalId = setInterval(() => {
      connection.write(`Move: ${direction}`);
    }, 50);
  }
}

const handleUserInput = (key) => {
  
  if (key === 'w') {
    sendDelayedCommand("up");
  }

  if (key === 'a') {
    sendDelayedCommand("left");
  }

  if (key === 's') {
    sendDelayedCommand("down");
  }

  if (key === 'd') {
    sendDelayedCommand("right");
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