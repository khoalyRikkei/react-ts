// New Promise
let a = 5;
let b = 10;
let c: undefined | number;

function sum(a: number, b: number) {
  return a + b;
}
setTimeout(() => {
  c = sum(5, 10);
}, 3000);

console.log("Kiểm tra c", c);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Chờ kết quả đúng
    resolve(sum(5, 10));
  }, 3000);
  //   Chờ kết quả sai
  // reject(sum(5, 10));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Chờ kết quả đúng
    resolve(sum(20, 30));
  }, 3000);
  //   Chờ kết quả sai
  // reject(sum(5, 10));
});

// promise2.then((result) => {
//   promise1.then((res1) => {
//     console.log(res1 + result);
//   });
// });

Promise.all([promise1, promise2]).then((result) => {
  console.log("Kiem tra all", result);
});
promise1
  .then((result) => {
    console.log("check promise ", result);
  })
  .catch((result) => {
    console.log("check promise catch ", result);
  });
let count = 0;
for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    count++;
    console.log(count);
  }, 100);
}
console.log("Kiểm tra count", count);

export {};
