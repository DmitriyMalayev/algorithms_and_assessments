function twoArrays(k, A, B) {
  let inverseA = A.sort((a, b) => a - b);
  let inverseB = B.sort((a, b) => b - a);
  for (let i in inverseA) {
    if (inverseA[i] + inverseB[i] < k) {
      return "NO";
    }
  }
  return "YES";
}
twoArrays(6, [1, 2, 9], [5, 4, 3]);
