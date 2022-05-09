function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  //sorting by 0 index

  const result = [intervals[0]]; //[[1,3]]
  //first interval set as initial value of result

  for (let interval of intervals) {
    let e1 = result[result.length - 1][1]; //3  3
    let s2 = interval[0]; //1  2
    let e2 = interval[1]; //3  6

    if (e1 >= s2) {
      // 3 >= 1   3 >= 6
      result[result.length - 1][1] = Math.max(e1, e2);
      //Getting the higher value   3 = 3   3=6
      // result[result.length - 1][1]: 3  becomes 6
    } else {
      result.push(interval);
    }
  }
  return result;
}
/*
let intervalsInput = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

let intervalsOutput = [
  [1, 6],
  [8, 10],
  [15, 18]
];

result[result.length -1]: [1, 3]
result[result.length -1][0]: 1
result[result.length -1][1]: 3
*/
