import { EventEmitter } from 'node:events';

class Ticker extends EventEmitter {
  start(interval = 1000, count = 0) {
    let ticks = 0;
    const timer = setInterval(() => {
      ticks++;
      this.emit('tick', ticks);
      if(ticks >= count) clearInterval(timer);
    }, interval);
  }
}

const ticker = new Ticker();

ticker.on('tick', (count) => {
  console.log(`Tick — ${count}`);
});

ticker.start(500, 8);
