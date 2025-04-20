import { EventEmitter } from 'node:events';
import chalk from 'chalk';
const color = [
  `red`,
  `green`,
  `yellow`,
  `blue`,
  `magenta`,
  `cyan`,
  `white`,
  `blackBright`,
  `redBright`,
  `greenBright`,
  `yellowBright`,
  `blueBright`,
  `magentaBright`,
  `cyanBright`,
  `whiteBright`,
];

const chat = new EventEmitter();

// Recive Message function
const recieveMessage = () => {
  chat.on('message', ({username, message}) => {
    // console.log(`${username}: ${message}`);
    console.log(`
      ${chalk[color[Math.floor(Math.random() * color.length)]](username)}: ${message}
    `);
  });
};

// Send message function
const sendMessage = (username, message) => {
  chat.emit('message', {username, message});
};

// Initialize messaging streamline
recieveMessage();

// Examples
sendMessage('Sergey Kislov', `Hey wassup fellows!`);
sendMessage('Kirill Lavrov', `Hey yo, what's going on!`);
sendMessage('Alexandr Poylov', `I'm the BOSS here, How are you mzfkrs?`);

