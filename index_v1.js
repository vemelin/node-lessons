console.log('Плыл по морю'); // 1

process.nextTick(() => {
  console.log('Чемодан,'); // 2
});

setImmediate(() => {
  console.log('В чемодане'); // 3
});

setTimeout(() => {
  console.log('Был диван,');

  process.nextTick(() => {
    console.log('На диване'); // 5
  });
}, 0); // 4

setTimeout(() => {
  console.log('Ехал слон.'); // 6
}, 1);

setTimeout(() => {
  console.log('Кто не верит –'); // 7
}, 2);

setTimeout(() => {
  console.log('Выйди вон!'); // 8
}, 3);