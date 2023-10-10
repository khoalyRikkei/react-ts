async function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 3000);
  });

  let a = 10;
  let b = 20;

  promise.then((res) => {
    console.log(res);
  });
  const c = (await promise) as number;

  console.log("async", c + a + b);
}
getData();

export {};
