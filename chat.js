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

const users = [
  {
    name: 'Sergey Kislov',
    message: `Hey wassup fellows!`,
  },
  {
    name: 'Kirill Lavrov',
    message: `Hey yo, what's going on!`,
  },
  {
    name: 'Alexandr Poylov',
    message: `I'm the BOSS here, How are god damn people?`,
  },
];

const chat = new EventEmitter();

// Recive Message function
const recieveMessage = () => {
  chat.on('message', ({ username, message }) => {
    // console.log(`${username}: ${message}`);
    console.log(`
      ${chalk[color[Math.floor(Math.random() * color.length)]](username)}: ${message}
    `);
  });
};

// Send message function
const sendMessage = (username, message) => {
  chat.emit('message', { username, message });
};

// Initialize messaging streamline
recieveMessage();

// Examples
users.map(({ name, message }) => sendMessage(name, message));
