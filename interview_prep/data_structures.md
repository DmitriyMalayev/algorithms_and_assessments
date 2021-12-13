# Data Structures

Ways of organizing information or data with an optimal "runtime complexity" for adding, editing or removing records.
JavaScript natively implements several data structures.
You will still be asked about "inferior" data structures.

`Whenever you are asked to write a function`
Make sure to first think about the data structure you should use to solve the problem that has an optimal runtime complexity for what we're trying to solve.

# Queue

A container where records of data enter on one end and exit on the other.  
Sometimes we can use a JavaScript Array to represent a Queue
`Whenever we make a Queue we disable all methods other than unshift (add an element to the beginning of an array) and pop (remove an element from the end of the array). The reason can be to improve performance, as well as differentiate it from a simple Array.`

# Enqueuing === Adding a Record

Process of adding a record in the beginning

# Dequeuing === Removing a Record

Process of removing a record in the end

# First In First Out (FIFO)

First record that goes into the queue is the First record that is removed.

```js
//Add to queue (front of the array)
array.unshift();

//Remove from queue (end of the array)
array.pop();

//Create a new empty queue
const q = new Queue();

//Add a record to a queue
q.add(1);

//Remove a record from a queue
q.remove();

/*
Create a queue Data Structure. The Queue should be a class with methods "add" and "remove". 
Adding to the Queue should store an element until it is removed. 
const q = new Queue()
q.add(1)
q.remove() //returns 1
*/

class Queue {
  constructor() {
    this.data = []; //A constructor is called when a new instance of the class is created. this.data doesn't have to be called data.
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}
```

`.push`
Appends new elements to the end of an array, and returns the new length of the array.

`.pop`
Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

`.shift()`
Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

`.unshift()`
Inserts new elements at the start of an array, and returns the new length of the array.

`.slice()`
Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.
@param start - The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
@param end - The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

`.splice()`
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted.
