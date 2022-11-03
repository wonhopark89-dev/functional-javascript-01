const addMaker = (a) => {
  // a 를 기억하는 클로저를 반환하는 함수
  console.log(`[a] ${a}`);
  return (b) => {
    console.log(`[a,b] ${a}, ${b}`);
    return a + b;
  };
};

const addMaker2 = (a) => (b) => a + b;

const add10 = addMaker(10);
//console.log(`[addMaker] ${addMaker}`);
console.log(`[add10] ${add10}`);
console.log(`[add10(5)] ${add10(5)}`);

const add20 = addMaker2(20);
//console.log(`[addMaker2] ${addMaker2}`);
console.log(`[add20] ${add20}`);
console.log(`[add20(17)] ${add20(17)}`);
