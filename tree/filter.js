let arr = [1, 2, 3]
arr.filter(element => {
  return element !== 1;
})
//[2,3]
//arr  [1,2,3] filter is non destrucive

let arr2 = [1, 2, 3];
arr2.filter((element) => {
  return element !== 1;
});

//reassigning arr2 