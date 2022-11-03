const log = console.log;

const itArr = () => {
  log("Arr------------------ ");
  const arr = [1, 2, 3];
  const it = arr[Symbol.iterator]();
  log(`[it] ${it}`);
  it.next();
  for (const a of it) {
    log(a);
  }
};

const itSet = () => {
  log("Set -----------");
  const set = new Set([1, 2, 3]);
  log(`set[0] ${set[0]}`); // undefined
  log(`set[Symbol.iterator]() ${set[Symbol.iterator]()}`);

  const setIt = set[Symbol.iterator]();
  log(`setIt ${setIt}`);
  setIt.next();
  for (const a of setIt) {
    // 이 부분이 동작하는 것은 i 같이 숫자로 접근하지 못하고
    // 이터러블 프로토콜을 따르고 있기 때문이다.
    log(a);
  }
};

const itMap = () => {
  log("Map -----------");
  const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  const mapIt = map[Symbol.iterator]();

  log(`mapIt.next() ${JSON.stringify(mapIt.next())}`);
  log(`mapIt.next() ${JSON.stringify(mapIt.next())}`);
  // log(`mapIt.next() ${JSON.stringify(mapIt.next())}`);
  // log(`mapIt.next() ${JSON.stringify(mapIt.next())}`);

  for (const a of mapIt) {
    log(a);
  }

  for (const a of map.keys()) {
    log(`key ` + a);
  }

  const mapIt2 = map.values();
  log(mapIt2); // Map Iterator
  for (const a of mapIt2) {
    log(`value ` + a);
  }

  for (const a of map.entries()) {
    log(`entries ${JSON.stringify(a)}`);
  }
};

const main = () => {
  itArr();
  itSet();
  itMap();
};

main();
