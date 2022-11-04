const log = console.log;


function* gen() {
  yield 1;
  yield 2;
  yield 3;

  return 100;
}



const main = () => {
  let iter = gen();
  log(iter[Symbol.iterator]() == iter);
  log(iter.next());
  log(iter.next());
  log(iter.next());
  log(iter.next());

  for (const a of gen()) {
    log(a);
  }
}

main();
