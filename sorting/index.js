/*
10, -30, 97, 0, 5

From i=0 to < array.length
From j = 0 to (array.length -1)
If the element at j is greater than j+1 
  swap elements at j and j+1
Notes
  Nested for loops iterating over the same collection of data is a red flag. n * n complexity. 
  The purpose of bubbleSort is to find the largest number in the array and drag it to the far right side.
*/

function bubbleSort(arr) {
  //standard for loop because we want access to index and not make actions on specific elements
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; i++) {
      if (arr[j] > arr[j + 1]) {
        const lesserValue = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesserValue;
      }
    }
  }
  return arr;
}

/*
10, -30, 97, 0, 5
i=0
j=
indexOfMin=

From i=0 to < array.length
  Assume the element at "i" is the least in the array, assign i to "indexOfMin"
  For j from i+1 to end of Array
    See if there is an element with a lower value
      If there is, record it's index
  If the index of the current element and the index of the "lowest" element are not the same, swap them.
Notes
  Also known as prove me wrong algorithm 

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesserValue = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesserValue;
    }
  }
  return arr
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
