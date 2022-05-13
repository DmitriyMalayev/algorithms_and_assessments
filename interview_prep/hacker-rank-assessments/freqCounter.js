function frequencyCounter(arr1, arr2) {
  let newArray = [];
  for (let i of arr1) {
    newArray.push(Math.pow(i, 2));
  }
  newArray.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  console.log(newArray);
  console.log(arr2);
  return newArray.values == arr2.values;
}
console.log(frequencyCounter([1, 2, 3], [4, 1, 9]));

function frequencyCounter2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCount1 = {};
  let freqCount2 = {};

  // We first make convert our arrays to objects  {number: frequency}
  for (let val of arr1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
    console.log(freqCount1);
  }

  for (let val of arr2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
    console.log(freqCount2);
  }

  for (let key in freqCount1) {
    if (!(key ** 2 in freqCount2)) {
      return false;
    }
    if (freqCount2[key ** 2] !== freqCount1[key]) {
      return false;
    }
  }
  return true;
}

console.log(frequencyCounter2([1, 2, 3, 2], [9, 1, 4, 4]));
