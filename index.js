console.log("Плыл по морю");

process.nextTick(() => {
  console.log("Чемодан,");
});

setImmediate(() => {
  console.log("В чемодане");
});

setTimeout(() => {
  console.log("Был диван,");

  // Adjustments
  process.nextTick(() => {
    console.log("На диване");
  });

}, 0);

setTimeout(() => {
  console.log("Ехал слон.");

  // Adjustments
  setImmediate(() => {
    console.log("Кто не верит –");
  });

  setImmediate(() => {
    console.log("Выйди вон!");
  });

}, 0);
