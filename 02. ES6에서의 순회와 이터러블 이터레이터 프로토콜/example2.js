const list = [1, 2, 3, 4, 5];
const str = "Hello";

// es5 순회
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// es6 순회
for (const a of list) {
  console.log(a);
}

for (const a of str) {
  console.log(a);
}
