function countingSort(arr) {
  let freqArray = new Array(100).fill(0)

  for (let num of arr) {
    freqArray[num]++
  }
  return freqArray
}


countingSort([ -5, -10, 0, -3, 8, 5, -1, 10 ])