/*
[10, -30, 97, 0, 5]

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
    for (let j = 0; j < arr.length - i - 1; j++) {
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
[10, -30, 97, 0, 5]
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
  return arr;
}

/*
mergeSort 
Utilizes recursion and two functions

We split the array into two and then we split those halves 
We repeat the same step
Now the Array contains one element, and it can't be split. 
The two arrays each have a single element and they are joined together into one array with two elements. 
*/
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center); //from 0 index to up to but not including center index
  const right = arr.slice(center); //from center index to end

  return merge(mergeSort(left), mergeSort(right));
}

/*
merge 
Doesn't contain recursion
  left and right are two separate sorted arrays of values  [-30, 22]   [0, 97]
It takes two separate sorted arrays and merges them into one sorted array called results

First we create a "results" array
While there are still elements in BOTH arrays
  IF the first element in the left half is less than the first element in the right half
    We shift the element from left into the "results" array.
  ELSE
    We shift the element from right into a "results" array
Take everything from the array that still has stuff in it and put it in results 
*/
function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    //fails when one of them becomes length of 0
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function merge2(left, right) {
  return left.concat(right).sort((a, b) => a - b);
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge2, merge };
