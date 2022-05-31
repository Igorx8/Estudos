type MeuTipo = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

promiseAsync().then(res => console.log(res + 1));


function outraPromise(): Promise<MeuTipo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

outraPromise().then(res => console.log(res));

