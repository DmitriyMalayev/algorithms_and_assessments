function lonelyinteger(a) {
  let newObject = {};
  for (let num of a) {
    newObject[num] = newObject[num] + 1 || 1;
  }
  for (let key in newObject) {
    if (newObject[key] === 1) {
      return key;
    }
  }
}

lonelyinteger([1,2,3,4,3,2,1])  //4 is the unique integer







