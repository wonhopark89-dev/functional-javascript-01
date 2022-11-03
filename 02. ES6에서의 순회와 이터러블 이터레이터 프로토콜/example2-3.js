const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next: () => {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      // 자기 자신을 반환해서 다음상태를 유지할 수 있도록
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
iterator.next();

// 자기 자신과 동일함 굿
console.log(iterator[Symbol.iterator]() === iterator);

for (const a of iterator) {
  console.log(a);
}
