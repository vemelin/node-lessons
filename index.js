console.log('Плыл по морю');

process.nextTick(() => {
	console.log('Чемодан,');
});

setImmediate(() => {
	console.log('В чемодане');
});

setTimeout(() => {
  console.log('Был диван,');
}, 0);

process.nextTick(() => {
  console.log('На диване');
});

setTimeout(() => {
  console.log('Ехал слон.');
}, 0);

setImmediate(() => {
	console.log('Кто не верит –');
});

setImmediate(() => {
	console.log('Выйди вон!');
});