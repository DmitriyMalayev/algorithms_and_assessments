# Data Structures
Ways of organizing information with optimal "runtime complexity" for adding, editing or removing records. 
JavaScript natively implements several data structures. 
You will still be asked about "inferior" data structures. 

# Queue
A container where records of data enter on one end and exit on the other.  

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
