function countingSort(arr) {
  let freqArray = new Array(100).fill(0)

  for (let num of arr) {
    freqArray[num]++
  }
  return freqArray
}
