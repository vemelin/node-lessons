import { EventEmitter } from 'node:events';

const chat = new EventEmitter();

// Recive Message function
const recieveMessage = () => {
  chat.on('message', ({username, message}) => {
    console.log(`${username}: ${message}`);
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

