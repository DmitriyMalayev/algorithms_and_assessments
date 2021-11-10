# Data Structures
Ways of organizing information or data with an optimal "runtime complexity" for adding, editing or removing records. 
JavaScript natively implements several data structures. 
You will still be asked about "inferior" data structures. 

`Whenever you are asked to write a function`
Make sure to first think about the data structure you should use to solve the problem that has an optimal runtime complexity for what we're trying to solve. 

# Queue
A container where records of data enter on one end and exit on the other.  
Sometimes we can use a JavaScript Array to represent a Queue

# Enqueuing === Adding
Process of adding a record in the beginning

# Dequeuing === Removing
Process of removing a record in the end

# First In First Out (FIFO) 
First record that goes into the queue is the First record that is removed. 

```js
//Add to queue (front of the array)
array.unshift()

//Remove from queue (end of the array)
array.pop()

//Create a new empty queue
const q = new Queue()

//Add a record to a queue
q.add(1)

//Remove a record from a queue
q.remove()
```
