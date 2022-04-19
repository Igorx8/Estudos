type MapNumberCallback = (item: number) => string;

function mapsNumber(
  array: Array<number>,
  callbackfn: MapNumberCallback,
): Array<string> {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const numeros = [1, 2, 3];
console.log(mapsNumber(numeros, (item) => String(item)));
